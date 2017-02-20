//顶点
function Vertex(label,wasVisited){
  this.label = label;
  this.wasVisited = wasVisited;
}
//图类
function Graph(v){
  this.vertices = v; //顶点数
  this.vertexList = [];
  this.adj = [];
  for (var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.adj[i].push("");
  }
  this.marked = []; //储存访问过的顶点
  for (var j = 0; j < this.vertices; j++) {
    this.marked[j] = false;
  }
  this.edges = 0; //边的数量
  this.edgeTo = []; //从一个顶点到下一个顶点的所有边
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs; //深度优先搜索
  this.bfs = bfs; //广度优先搜索
  this.pathTo = pathTo //与指定顶点有共同边的所有顶点
  this.hasPathTo = hasPathTo; //与指定顶点有共同边的所有顶点
  this.topSort = topSort; //拓扑排序
  this.topSortHelper = topSortHelper;
}
//增加边
function addEdge(v1,v2){
  this.adj[v1].push(v2);
  this.adj[v2].push(v1);
  this.edges++;
}
//显示图的内容
function showGraph(){
  var visited = [];
  for (var i = 0; i < this.vertices; i++) {
    var str = "";
    str += this.vertexList[i] + " -> ";
    visited.push(this.vertexList[i]);
    for (var j = 0; j < this.vertices; j++) {
      if (visited.indexOf(this.vertexList[j])<0) {
        str += this.vertexList[j] + " ";
      }
    }
    print(str);
  }
}
//深度优先搜索,depthfirst
function dfs(v){
  //标记为已访问
  this.marked[v] = true;
  //若有临接点
  if (this.adj[v] != undefined) {
    print("visited vertex: " + v);
    for (var i = 0; i < this.adj[v].length; i++) {
      if(!this.marked[this.adj[v][i]]){
        this.dfs(this.adj[v][i]);
      }
    }
  }
}

//广度优先搜索, breadth first search
function bfs(s){
  var queue = [];
  //标记为已访问
  this.marked[s] = true;
  queue.push(s); //添加到队尾
  while (queue.length>0) {
    var v = queue.shift();
    if (this.adj[v]!=undefined) {
      print("Visited vertex: " + v);
      for (var i = 0; i < this.adj[v].length; i++) {
        if(!this.marked[this.adj[v][i]]){
          this.marked[this.adj[v][i]] = true;
          this.edgeTo[this.adj[v][i]] = v;
          queue.push(this.adj[v][i]);
        }
      }
    }
  }
}
//与指定顶点有共同边的所有顶点
function pathTo(source,v){
  //var source = 2;
  if (!this.hasPathTo(v)) {
    return undefined;
  }
  var path = [];
  for (var i=v; i!=source; i=this.edgeTo[i]) {
  //  print(i);
    path.push(i);
  }
  path.push(source);
  return path;
}
//与指定顶点有共同边的所有顶点
function hasPathTo(v){
  return this.marked[v];
}
//拓扑排序
function topSort(){
  var visited = [];
  var stack = [];
  for (var i = 0; i < this.vertices; i++) {
    visited[i] = false;
  }
  for (var i = 0; i < this.vertices; i++) {
    if(visited[i]==false){
      this.topSortHelper(i,visited,stack);
    }
  }
  for (var i = 0; i < stack.length; i++) {
    if(stack[i]!=undefined && stack[i]!=false){
      print(this.vertexList[stack[i]]);
    }
  }
}
//
function topSortHelper(v,visited,stack){
  visited[v] = true;
  for (var i = 0; i < this.adj[v].length; i++) {
    if(!visited[this.adj[v][i]]){
      topSortHelper(visited[this.adj[v][i]],visited,stack);
    }
  }
  stack.push(v);
}
