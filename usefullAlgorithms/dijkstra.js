// Function to find the shortest path from source to all other vertices
const dijkstra = (graph, source) => {
  // Initialize distances to all vertices as infinite
  const distances = {};
  for (const vertex of Object.keys(graph)) {
    distances[vertex] = Infinity;
  }

  // Initialize a set to keep track of visited vertices
  const visited = new Set();

  // Set the distance to the source vertex to 0
  distances[source] = 0;

  // Initialize a priority queue to store the vertices
  // and their distances from the source
  const queue = new PriorityQueue();
  queue.enqueue(source, 0);

  // Keep looping as long as there are vertices in the queue
  while (!queue.isEmpty()) {
    // Get the vertex with the smallest distance
    const vertex = queue.dequeue();

    // Skip this vertex if it has already been visited
    if (visited.has(vertex)) continue;

    // Add the vertex to the visited set
    visited.add(vertex);

    // Loop through all neighbors of the vertex
    for (const neighbor of graph[vertex]) {
      // Calculate the distance to the neighbor
      // by adding the edge weight to the distance to the vertex
      const distance = distances[vertex] + graph[vertex][neighbor];

      // Update the distance to the neighbor if the calculated
      // distance is less than the current distance
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        queue.enqueue(neighbor, distance);
      }
    }
  }

  // Return the distances to all vertices
  return distances;
};
