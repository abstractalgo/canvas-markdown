import { Background, Edge, Node, NodeTypes, ReactFlow } from "reactflow";
import "reactflow/dist/style.css";
import { FileBlockProps } from "@githubnext/blocks";
import { FC, useMemo } from "react";
import { TextNode } from "./components/text-node";
import { parseCanvas } from "./canvas";

const nodeTypes: NodeTypes = {
  text: TextNode,
  group: TextNode,
};

const MarkdownCanvasBlock: FC<FileBlockProps> = ({ content }) => {
  const [nodes, edges] = useMemo<[Node[], Edge[]]>(() => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    const parsedContent = parseCanvas(content);

    for (const n of parsedContent.nodes) {
      nodes.push({
        id: n.id,
        position: {
          x: n.x,
          y: n.y,
        },
        width: n.width,
        height: n.height,
        type: n.type,
        data: {
          text: n.type === "text" ? n.text : undefined,
          label: n.type === "group" ? n.label : undefined,
          width: n.width,
          height: n.height,
        },
      });
    }

    for (const e of parsedContent.edges) {
      edges.push({
        id: e.id,
        source: e.fromNode,
        target: e.toNode,
        sourceHandle: e.fromSide,
        targetHandle: e.toSide,
      });
    }

    return [nodes, edges];
  }, [content]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        minZoom={0.01}
        panOnScroll
        snapToGrid
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default MarkdownCanvasBlock;
