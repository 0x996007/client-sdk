import * as _255 from './api/http.js';
import * as _256 from './protobuf/descriptor.js';
import * as _257 from './protobuf/any.js';
import * as _258 from './protobuf/timestamp.js';
import * as _259 from './protobuf/duration.js';
export declare namespace google {
    const api: {
        Http: {
            encode(message: _255.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.Http;
            fromPartial(object: import("../helpers.js").DeepPartial<_255.Http>): _255.Http;
        };
        HttpRule: {
            encode(message: _255.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.HttpRule;
            fromPartial(object: import("../helpers.js").DeepPartial<_255.HttpRule>): _255.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _255.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.CustomHttpPattern;
            fromPartial(object: import("../helpers.js").DeepPartial<_255.CustomHttpPattern>): _255.CustomHttpPattern;
        };
    };
    const protobuf: {
        Duration: {
            encode(message: _259.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _259.Duration;
            fromPartial(object: import("../helpers.js").DeepPartial<_259.Duration>): _259.Duration;
        };
        Timestamp: {
            encode(message: _258.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _258.Timestamp;
            fromPartial(object: import("../helpers.js").DeepPartial<_258.Timestamp>): _258.Timestamp;
        };
        Any: {
            encode(message: _257.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _257.Any;
            fromPartial(object: import("../helpers.js").DeepPartial<_257.Any>): _257.Any;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _256.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _256.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _256.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _256.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _256.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _256.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _256.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _256.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _256.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _256.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _256.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _256.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _256.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _256.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _256.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _256.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _256.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _256.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _256.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _256.FieldOptions_CType;
        FieldOptions_JSType: typeof _256.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _256.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _256.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _256.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _256.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.FileDescriptorSet;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.FileDescriptorSet>): _256.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _256.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.FileDescriptorProto;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.FileDescriptorProto>): _256.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _256.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.DescriptorProto;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.DescriptorProto>): _256.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _256.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.DescriptorProto_ExtensionRange;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.DescriptorProto_ExtensionRange>): _256.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _256.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.DescriptorProto_ReservedRange;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.DescriptorProto_ReservedRange>): _256.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _256.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.ExtensionRangeOptions;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.ExtensionRangeOptions>): _256.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _256.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.FieldDescriptorProto;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.FieldDescriptorProto>): _256.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _256.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.OneofDescriptorProto;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.OneofDescriptorProto>): _256.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _256.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.EnumDescriptorProto;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.EnumDescriptorProto>): _256.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _256.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.EnumDescriptorProto_EnumReservedRange>): _256.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _256.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.EnumValueDescriptorProto;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.EnumValueDescriptorProto>): _256.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _256.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.ServiceDescriptorProto;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.ServiceDescriptorProto>): _256.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _256.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.MethodDescriptorProto;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.MethodDescriptorProto>): _256.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _256.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.FileOptions;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.FileOptions>): _256.FileOptions;
        };
        MessageOptions: {
            encode(message: _256.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.MessageOptions;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.MessageOptions>): _256.MessageOptions;
        };
        FieldOptions: {
            encode(message: _256.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.FieldOptions;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.FieldOptions>): _256.FieldOptions;
        };
        OneofOptions: {
            encode(message: _256.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.OneofOptions;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.OneofOptions>): _256.OneofOptions;
        };
        EnumOptions: {
            encode(message: _256.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.EnumOptions;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.EnumOptions>): _256.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _256.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.EnumValueOptions;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.EnumValueOptions>): _256.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _256.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.ServiceOptions;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.ServiceOptions>): _256.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _256.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.MethodOptions;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.MethodOptions>): _256.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _256.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.UninterpretedOption;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.UninterpretedOption>): _256.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _256.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.UninterpretedOption_NamePart;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.UninterpretedOption_NamePart>): _256.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _256.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.SourceCodeInfo;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.SourceCodeInfo>): _256.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _256.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.SourceCodeInfo_Location;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.SourceCodeInfo_Location>): _256.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _256.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.GeneratedCodeInfo;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.GeneratedCodeInfo>): _256.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _256.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.GeneratedCodeInfo_Annotation;
            fromPartial(object: import("../helpers.js").DeepPartial<_256.GeneratedCodeInfo_Annotation>): _256.GeneratedCodeInfo_Annotation;
        };
    };
}
