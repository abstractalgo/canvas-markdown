import { FC } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import Markdown from "react-markdown";

export const TextNode: FC<
  NodeProps<{
    text: string;
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
          border: "1px solid red",
          width: `${data.width}px`,
          height: `${data.height}px`,
          background: "white",
          zIndex: 3,
        }}
      >
        <Markdown>{data.text}</Markdown>
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Bottom} />
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Right} />
    </>
  );
};
