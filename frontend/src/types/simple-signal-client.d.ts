declare module 'simple-signal-client' {
  import { EventEmitter } from 'events';
  import SimplePeer, { SignalData } from 'simple-peer';
  import { Socket } from 'net'
  import { Socket: SocketIO } from 'socket.io-client';

  export = SimpleSignalClient;

  class SimpleSignalClient extends EventEmitter {
    constructor(socket: Socket | SocketIO, options?: SimpleSignalClient.Options);

    id: string | null;
    socket: Socket | null;
    private _connectionTimeout: number;
    private _peers: Record<string, SimplePeer.Instance>;
    private _sessionQueues: Record<string, SignalData[]>;
    private _timers: Map<string, NodeJS.Timeout>;

    static SimplePeer: typeof SimplePeer;
    static ERR_CONNECTION_TIMEOUT: string;
    static ERR_PREMATURE_CLOSE: string;

    discover(discoveryData?: Record<string, any> | string): void;
    peers(): SimplePeer.Instance[];
    destroy(): void;
    connect(target: string, metadata?: Record<string, any> | string, peerOptions?: SimplePeer.Options): Promise<SimpleSignalClient.ConnectionResult>;

    private _onDiscover(data: { id: string; discoveryData: any }): void;
    private _onOffer({ initiator, metadata, sessionId, signal }: SimpleSignalClient.OfferData): void;
    private _accept(request: SimpleSignalClient.Request, metadata?: Record<string, any>, peerOptions?: SimplePeer.Options): Promise<SimpleSignalClient.ConnectionResult>;
    private _reject(request: SimpleSignalClient.Request, metadata?: Record<string, any>): void;
    private _onReject({ sessionId, metadata }: { sessionId: string; metadata: any }): void;
    private _onSignal({ sessionId, signal, metadata }: { sessionId: string; signal: SignalData; metadata: any }): void;
    private _onSafeConnect(peer: SimplePeer.Instance, callback: (peer: SimplePeer.Instance) => void): void;
    private _closePeer(sessionId: string): void;
    private _startTimer(sessionId: string, cb: (metadata: { code: string }) => void): void;
    private _clearTimer(sessionId: string): void;
  }

  namespace SimpleSignalClient {
    export interface Options {
      connectionTimeout?: number;
    }

    export interface Request {
      initiator: string;
      metadata: any;
      sessionId: string;
      accept(metadata?: Record<string, any>, peerOptions?: SimplePeer.Options): Promise<ConnectionResult>;
      reject(metadata?: Record<string, any>): void;
    }

    export interface OfferData {
      initiator: string;
      metadata: any;
      sessionId: string;
      signal: SignalData;
    }

    export interface ConnectionResult {
      peer: SimplePeer.Instance;
      metadata: any;
    }

    export interface SimplePeerInstance extends SimplePeer.Instance{}
  }
}