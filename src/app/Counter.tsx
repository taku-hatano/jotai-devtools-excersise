"use client";

import { atom, useAtom, Provider } from "jotai";
import { useAtomsDevtools, DevTools } from "jotai-devtools";

const counterAtom = atom(0);
counterAtom.debugLabel = "counterAtom";

function AtomsDevtools(props: { children: React.ReactNode }) {
  useAtomsDevtools("demo");
  return <>{props.children}</>;
}

function Counter() {
  const [count, setCount] = useAtom(counterAtom);
  return (
    <AtomsDevtools>
      <div>
        <h1>Counter</h1>
        <div>
          <button
            style={{
              width: "30px",
              height: "30px",
            }}
            disabled={false}
            onClick={() => setCount((c) => c + 1)}
          >
            +
          </button>
          <span
            style={{
              margin: "0 10px",
            }}
          >
            {count}
          </span>
          <button
            style={{
              width: "30px",
              height: "30px",
            }}
            onClick={() => setCount((c) => c - 1)}
          >
            -
          </button>
        </div>
      </div>
    </AtomsDevtools>
  );
}

export default function CounterWithDevtools() {
  return (
    <Provider>
      <DevTools />
      <AtomsDevtools>
        <Counter />
      </AtomsDevtools>
    </Provider>
  );
}
