import {
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
  useCallback
} from "react";

import {
  useNodes,
  Panel,
  useStore,
  useStoreApi,
  type OnNodesChange,
  type NodeChange,
  type XYPosition,
  ViewportPortal,
  useReactFlow
} from "@xyflow/react";

export function ViewportLogger() {
  const viewport = useStore(
    (s) =>
      `x: ${s.transform[0].toFixed(2)}, y: ${s.transform[1].toFixed(
        2
      )}, zoom: ${s.transform[2].toFixed(2)}`
  );

  return <div>{viewport}</div>;
}

type ChangeLoggerProps = {
  color?: string;
  limit?: number;
};

type ChangeInfoProps = {
  change: NodeChange;
};

function ChangeInfo({ change }: ChangeInfoProps) {
  const id = "id" in change ? change.id : "-";
  const { type } = change;

  return (
    <div className="mb-3">
      <div>node id: {id}</div>
      <div>
        {type === "add" ? JSON.stringify(change.item, null, 2) : null}
        {type === "dimensions"
          ? `dimensions: ${change.dimensions?.width} × ${change.dimensions?.height}`
          : null}
        {type === "position"
          ? `position: ${change.position?.x.toFixed(
              1
            )}, ${change.position?.y.toFixed(1)}`
          : null}
        {type === "remove" ? "remove" : null}
        {type === "select" ? (change.selected ? "select" : "unselect") : null}
      </div>
    </div>
  );
}

export function ChangeLogger({ limit = 20 }: ChangeLoggerProps) {
  const [changes, setChanges] = useState<NodeChange[]>([]);
  const store = useStoreApi();

  // Memoize the callback for handling node changes
  const handleNodeChanges: OnNodesChange = useCallback(
    (newChanges: NodeChange[]) => {
      setChanges((prevChanges) =>
        [...newChanges, ...prevChanges].slice(0, limit)
      );
    },
    [limit]
  );

  useEffect(() => {
    store.setState({ onNodesChange: handleNodeChanges });

    return () => store.setState({ onNodesChange: undefined });
  }, [handleNodeChanges, store]);

  const NoChanges = () => <div>No Changes Triggered</div>;

  return (
    <>
      {changes.length === 0 ? (
        <NoChanges />
      ) : (
        changes.map((change, index) => (
          <ChangeInfo key={index} change={change} />
        ))
      )}
    </>
  );
}

export function NodeInspector() {
  const { getInternalNode } = useReactFlow();
  const nodes = useNodes();

  return (
    <ViewportPortal>
      <div className="text-secondary-foreground">
        {nodes.map((node) => {
          const internalNode = getInternalNode(node.id);
          if (!internalNode) {
            return null;
          }

          const absPosition = internalNode?.internals.positionAbsolute;

          return (
            <NodeInfo
              key={node.id}
              id={node.id}
              selected={!!node.selected}
              type={node.type || "default"}
              position={node.position}
              absPosition={absPosition}
              width={node.measured?.width ?? 0}
              height={node.measured?.height ?? 0}
              data={node.data}
            />
          );
        })}
      </div>
    </ViewportPortal>
  );
}

type NodeInfoProps = {
  id: string;
  type: string;
  selected: boolean;
  position: XYPosition;
  absPosition: XYPosition;
  width?: number;
  height?: number;
  data: any;
};

function NodeInfo({
  id,
  type,
  selected,
  position,
  absPosition,
  width,
  height,
  data
}: NodeInfoProps) {
  if (!width || !height) return null;

  const absoluteTransform = `translate(${absPosition.x}px, ${
    absPosition.y + height
  }px)`;
  const formattedPosition = `${position.x.toFixed(1)}, ${position.y.toFixed(
    1
  )}`;
  const formattedDimensions = `${width} × ${height}`;
  const selectionStatus = selected ? "Selected" : "Not Selected";

  return (
    <div
      style={{
        position: "absolute",
        transform: absoluteTransform,
        width: width * 2
      }}
      className="text-xs"
    >
      <div>id: {id}</div>
      <div>type: {type}</div>
      <div>selected: {selectionStatus}</div>
      <div>position: {formattedPosition}</div>
      <div>dimensions: {formattedDimensions}</div>
      <div>data: {JSON.stringify(data, null, 2)}</div>
    </div>
  );
}

type Tool = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  label: string;
  value: string;
};
