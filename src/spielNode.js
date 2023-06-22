import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

function spielNode({ data, isConnectable }) {
  return (
    <div className="spielNode">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>
        <label htmlFor="text">Text:</label>
        <input id="text" className="nodrag" />
        <button label="Drück mich!" />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default spielNode;
