import { MarkerType } from 'reactflow';

export const nodes = [
{
    id: "1",
    type: "entityType",
    position: { x: 0, y: 0 },
    data: {
      header: "Person",
      attributes: [
        { name: "id", type: "int" },
        { name: "firstName", type: "str"},
        { name: "lastName", type: "str"},
        { name: "gender", type: "str"},
        { name: "birthday", type: "date"},
        { name: "email", type: "str"},
        { name: "locationID", type: "str"},
        { name: "creationDate", type: "date"},
        { name: "browserUsed", type: "strt"}
      ]
    }
  },

  {
    id: "2",
    type: "entityType",
    position: { x: 400, y: 0 },
    data: {
      header: "Post",
      attributes: [
        { name: "id", type: "int" },
        { name: "creationDate", type: "date"},
        { name: "locationID", type: "str"},
        { name: "content", type: "str"},
        { name: "length", type: "int"}
      ]
    }
  },

  {
    id: "3",
    type: "entityType",
    position: { x: 400, y: 300 },
    data: {
      header: "Tag",
      attributes: [
        { name: "id", type: "int" },
        { name: "name", type: "str"}
      ]
    }
  }
];

export const edges = [
  {
    id: "2-1",
    source: "2",
    target: "1",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      height: 20,
      width: 20
    },
    style: {
      strokeWidth: 2
    },
    label: "person"
  },

  {
    id: "2-3",
    source: "2",
    target: "3",
    sourceHandle: "sl",
    targetHandle: "tl",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      height: 20,
      width: 20
    },
    style: {
      strokeWidth: 2
    },
    label: "has_tag"
  },

  {
    id: "1-3",
    source: "1",
    target: "3",
    sourceHandle: "sb",
    targetHandle: "tb",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      height: 20,
      width: 20
    },
    style: {
      strokeWidth: 2
    },
    label: "has_interest"
  }
];