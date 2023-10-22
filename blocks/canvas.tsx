type CanvasNode = {
  id: string;
  width: number;
  height: number;
  x: number;
  y: number;
  color: number;
} & (
  | {
      type: "group";
      label: string;
    }
  | {
      type: "text";
      text: string;
    }
);

type CanvasEdge = {
  id: string;
  fromNode: CanvasNode["id"];
  fromSide: "left" | "right" | "top" | "bottom";
  toNode: CanvasNode["id"];
  toSide: "left" | "right" | "top" | "bottom";
};

type Canvas = {
  nodes: CanvasNode[];
  edges: CanvasEdge[];
};

export const parseCanvas = (content: string): Canvas => {
  return JSON.parse(content) as Canvas;
};
