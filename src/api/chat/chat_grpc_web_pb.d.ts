import * as grpcWeb from 'grpc-web';

import * as chat_pb from './chat_pb';


export class ChatServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  join(
    request: chat_pb.User,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: chat_pb.JoinResponse) => void
  ): grpcWeb.ClientReadableStream<chat_pb.JoinResponse>;

  sendMsg(
    request: chat_pb.ChatMessage,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: chat_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<chat_pb.Empty>;

  receiveMsg(
    request: chat_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<chat_pb.ChatMessage>;

  getAllUsers(
    request: chat_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: chat_pb.UserList) => void
  ): grpcWeb.ClientReadableStream<chat_pb.UserList>;

}

export class ChatServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  join(
    request: chat_pb.User,
    metadata?: grpcWeb.Metadata
  ): Promise<chat_pb.JoinResponse>;

  sendMsg(
    request: chat_pb.ChatMessage,
    metadata?: grpcWeb.Metadata
  ): Promise<chat_pb.Empty>;

  receiveMsg(
    request: chat_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<chat_pb.ChatMessage>;

  getAllUsers(
    request: chat_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<chat_pb.UserList>;

}

