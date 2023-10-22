import { FC } from "react";
import { Handle, NodeProps, Position } from "reactflow";

export const GroupNode: FC<
  NodeProps<{
    label: string;
    width: number;
    height: number;
  }>
> = ({ data }) => {
  return (
    <>
      <Handle type="source" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <Handle type="source" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      <div
        style={{
          border: "1px solid blue",
          width: `${data.width}px`,
          height: `${data.height}px`,
        }}
      >
        {data.label}
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Bottom} />
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Right} />
    </>
  );
};
