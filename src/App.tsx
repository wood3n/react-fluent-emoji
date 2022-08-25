import React, { lazy, Suspense } from "react";
import "./App.css";

interface ComponentType {
  default: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const icons = import.meta.glob<ComponentType>("./icon-component/**/*.tsx");

function App() {
  const paths = Object.keys(icons);

  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        {paths.map(path => {
          const Component = lazy(icons[path]);

          return <Component key={path} width={120} height={120} />;
        })}
      </Suspense>
    </div>
  );
}

export default App;
