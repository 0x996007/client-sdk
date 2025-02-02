import * as _1 from './cosmos.js';
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _1.ScalarType;
    scalarTypeToJSON(object: _1.ScalarType): string;
    ScalarType: typeof _1.ScalarType;
    ScalarTypeSDKType: typeof _1.ScalarType;
    InterfaceDescriptor: {
        encode(message: _1.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _1.InterfaceDescriptor;
        fromPartial(object: import("../helpers.js").DeepPartial<_1.InterfaceDescriptor>): _1.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _1.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _1.ScalarDescriptor;
        fromPartial(object: import("../helpers.js").DeepPartial<_1.ScalarDescriptor>): _1.ScalarDescriptor;
    };
};
