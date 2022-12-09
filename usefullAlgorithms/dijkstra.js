/*
The Dijkstra algorithm is a graph search algorithm that is used to find the shortest path from one node to another in a weighted graph. 
It was developed by Dutch computer scientist Edsger W. Dijkstra in 1956 and is an example of a greedy algorithm, meaning that it makes the locally 
optimal choice at each step in order to try to find the globally optimal solution.

The algorithm works by starting at the source node and exploring all of its neighboring nodes. For each neighboring node, 
it calculates the total cost to reach that node by adding the edge weight of the current node to the already-calculated cost of the source node.
It then selects the node with the lowest cost and repeats this process until it reaches the destination node.
*/

// Define a graph with weighted edges
let graph = {
  A: { B: 5, C: 2 },
  B: { D: 3, E: 1 },
  C: { B: 2, D: 4 },
  D: { E: 2 },
  E: {},
};

// Define a function to implement the Dijkstra algorithm
function dijkstra(graph, source, destination) {
  // Initialize the distance of each node to infinity and the source node to 0
  let distances = {};
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[source] = 0;

  // Initialize the unvisited and visited sets
  let unvisited = new Set(Object.keys(graph));
  let visited = new Set();

  // Initialize the previous node of each node to null
  let previous = {};
  for (let node in graph) {
    previous[node] = null;
  }

  // Loop until all nodes have been visited
  while (unvisited.size > 0) {
    // Select the unvisited node with the smallest distance
    let current = null;
    for (let node of unvisited) {
      if (current === null || distances[node] < distances[current]) {
        current = node;
      }
    }

    // If the destination node has been reached, return the shortest path
    if (current === destination) {
      let path = [];
      let curr = destination;
      while (curr !== null) {
        path.push(curr);
        curr = previous[curr];
      }
      path.reverse();
      return path;
    }

    // Remove the current node from the unvisited set and add it to the visited set
    unvisited.delete(current);
    visited.add(current);

    // Loop through the current node's neighbors
    for (let neighbor in graph[current]) {
      // Calculate the distance to the neighbor by adding the edge weight of the current node
      let distance = distances[current] + graph[current][neighbor];

      // If the distance is shorter than the current distance, update the distances and previous nodes
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = current;
      }
    }
  }

  // If the destination node was not reached, return null
  return null;
}

// USAGE:
//  Use the dijkstra function to find the shortest path from A to E
let result = dijkstra(graph, 'A', 'E');

// The result should be ["A", "B", "E"]
console.log(result);
