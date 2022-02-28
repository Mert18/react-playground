protoc -I=chat chat.proto \
    --js_out=import_style=commonjs:../api/chat \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:../api/chat
                                                                            
protoc -I=chat chat.proto \
    --js_out=import_style=commonjs+dts:../api/chat \
    --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:../api/chat

