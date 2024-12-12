// "use client";

import Spline from "@splinetool/react-spline/next";

export default function SplineHero() {
  const onLoad = (spline) => {
    const camera = spline.findObjectById(
      "759d250b-a02f-43c1-bd36-5b94a5991f87"
    );
    console.log("CAMERA: --> ", camera);
    spline.setZoom(0.1);
  };

  return (
    <div
      className="flex-1 relative w-svw justify-start items-start align-top md:w-screen h-5/6"
      // style={{ width: "30vw" }}
    >
      <Spline
        scene="/scene.splinecode"
        // scene="https://prod.spline.design/uyXGqgC2Npyf3lRi/scene.splinecode"
        // onLoad={onLoad}
      />
    </div>
  );
}
