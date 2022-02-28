npx grpc_tools_node_protoc_ts \
  --js_out=import_style=commonjs,binary:./src/pb \
  --grpc_out=./src/pb \
  -I=./protos ./protos/*.proto
