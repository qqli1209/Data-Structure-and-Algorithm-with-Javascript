load("Graph.js");
g = new Graph(5);
g.addEdge(0,1);
g.addEdge(1,3);
g.addEdge(0,2);
g.addEdge(2,4);
g.showGraph();
//print("\ndepth first search:");
//g.dfs(0);
print("\nbreadth first search:");
var source = 3;
var dest = 4;
print("source: " + source);
g.bfs(source);
var paths = g.pathTo(source,dest);
while(paths.length>0){
  if (paths.length>1) {
    putstr(paths.pop()+" - ");
  } else {
    putstr(paths.pop());
  }
}
print("\n");
//for (var i = 0; i < g.edgeTo.length; i++) {
//  print(g.edgeTo[i]);
//}

print("----------------test2---------------");
s = new Graph(14);
s.addEdge(1,2);
s.addEdge(1,5);
s.addEdge(1,8);
s.addEdge(1,11);
s.addEdge(2,3);
s.addEdge(5,6);
s.addEdge(8,9);
s.addEdge(11,12);
s.addEdge(3,4);
s.addEdge(6,7);
s.addEdge(9,10);
s.addEdge(12,13);
s.showGraph();
//print("\ndepth first search:");
//g.dfs(0);
print("\nbreadth first search:");
var source = 2;
var dest = 10;
print("source: " + source);
s.bfs(source);
var paths = s.pathTo(source,dest);
while(paths.length>0){
  if (paths.length>1) {
    putstr(paths.pop()+" - ");
  } else {
    putstr(paths.pop());
  }
}
print("\n");

print("-----------------test3---------------------");
t = new Graph(6);
t.addEdge(1,2);
t.addEdge(2,5);
t.addEdge(1,3);
t.addEdge(1,4);
t.addEdge(0,1);
t.vertexList = ["CS1","CS2","Data","Language","Systems","Algorithms"];
//t.showGraph();
t.topSort();
