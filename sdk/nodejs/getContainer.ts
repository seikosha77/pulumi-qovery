// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * ## # qovery.Container (Data Source)
 *
 * Provides a Qovery container resource. This can be used to create and manage Qovery container registry.
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as qovery from "@pulumi/qovery";
 *
 * const myContainer = qovery.getContainer({
 *     id: "<container_id>",
 * });
 * ```
 */
export function getContainer(args: GetContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("qovery:index/getContainer:getContainer", {
        "advancedSettingsJson": args.advancedSettingsJson,
        "arguments": args.arguments,
        "autoDeploy": args.autoDeploy,
        "autoPreview": args.autoPreview,
        "cpu": args.cpu,
        "customDomains": args.customDomains,
        "deploymentStageId": args.deploymentStageId,
        "entrypoint": args.entrypoint,
        "environmentVariableAliases": args.environmentVariableAliases,
        "environmentVariableOverrides": args.environmentVariableOverrides,
        "environmentVariables": args.environmentVariables,
        "healthchecks": args.healthchecks,
        "id": args.id,
        "maxRunningInstances": args.maxRunningInstances,
        "memory": args.memory,
        "minRunningInstances": args.minRunningInstances,
        "ports": args.ports,
        "secretAliases": args.secretAliases,
        "secretOverrides": args.secretOverrides,
        "secrets": args.secrets,
        "storages": args.storages,
    }, opts);
}

/**
 * A collection of arguments for invoking getContainer.
 */
export interface GetContainerArgs {
    advancedSettingsJson?: string;
    arguments?: string[];
    autoDeploy?: boolean;
    autoPreview?: boolean;
    cpu?: number;
    customDomains?: inputs.GetContainerCustomDomain[];
    deploymentStageId?: string;
    entrypoint?: string;
    environmentVariableAliases?: inputs.GetContainerEnvironmentVariableAlias[];
    environmentVariableOverrides?: inputs.GetContainerEnvironmentVariableOverride[];
    environmentVariables?: inputs.GetContainerEnvironmentVariable[];
    healthchecks?: inputs.GetContainerHealthchecks;
    id: string;
    maxRunningInstances?: number;
    memory?: number;
    minRunningInstances?: number;
    ports?: inputs.GetContainerPort[];
    secretAliases?: inputs.GetContainerSecretAlias[];
    secretOverrides?: inputs.GetContainerSecretOverride[];
    secrets?: inputs.GetContainerSecret[];
    storages?: inputs.GetContainerStorage[];
}

/**
 * A collection of values returned by getContainer.
 */
export interface GetContainerResult {
    readonly advancedSettingsJson: string;
    readonly arguments?: string[];
    readonly autoDeploy: boolean;
    readonly autoPreview: boolean;
    readonly builtInEnvironmentVariables: outputs.GetContainerBuiltInEnvironmentVariable[];
    readonly cpu: number;
    readonly customDomains?: outputs.GetContainerCustomDomain[];
    readonly deploymentStageId: string;
    readonly entrypoint: string;
    readonly environmentId: string;
    readonly environmentVariableAliases?: outputs.GetContainerEnvironmentVariableAlias[];
    readonly environmentVariableOverrides?: outputs.GetContainerEnvironmentVariableOverride[];
    readonly environmentVariables?: outputs.GetContainerEnvironmentVariable[];
    readonly externalHost: string;
    readonly healthchecks?: outputs.GetContainerHealthchecks;
    readonly id: string;
    readonly imageName: string;
    readonly internalHost: string;
    readonly maxRunningInstances: number;
    readonly memory: number;
    readonly minRunningInstances: number;
    readonly name: string;
    readonly ports: outputs.GetContainerPort[];
    readonly registryId: string;
    readonly secretAliases?: outputs.GetContainerSecretAlias[];
    readonly secretOverrides?: outputs.GetContainerSecretOverride[];
    readonly secrets?: outputs.GetContainerSecret[];
    readonly storages: outputs.GetContainerStorage[];
    readonly tag: string;
}
/**
 * ## # qovery.Container (Data Source)
 *
 * Provides a Qovery container resource. This can be used to create and manage Qovery container registry.
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as qovery from "@pulumi/qovery";
 *
 * const myContainer = qovery.getContainer({
 *     id: "<container_id>",
 * });
 * ```
 */
export function getContainerOutput(args: GetContainerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContainerResult> {
    return pulumi.output(args).apply((a: any) => getContainer(a, opts))
}

/**
 * A collection of arguments for invoking getContainer.
 */
export interface GetContainerOutputArgs {
    advancedSettingsJson?: pulumi.Input<string>;
    arguments?: pulumi.Input<pulumi.Input<string>[]>;
    autoDeploy?: pulumi.Input<boolean>;
    autoPreview?: pulumi.Input<boolean>;
    cpu?: pulumi.Input<number>;
    customDomains?: pulumi.Input<pulumi.Input<inputs.GetContainerCustomDomainArgs>[]>;
    deploymentStageId?: pulumi.Input<string>;
    entrypoint?: pulumi.Input<string>;
    environmentVariableAliases?: pulumi.Input<pulumi.Input<inputs.GetContainerEnvironmentVariableAliasArgs>[]>;
    environmentVariableOverrides?: pulumi.Input<pulumi.Input<inputs.GetContainerEnvironmentVariableOverrideArgs>[]>;
    environmentVariables?: pulumi.Input<pulumi.Input<inputs.GetContainerEnvironmentVariableArgs>[]>;
    healthchecks?: pulumi.Input<inputs.GetContainerHealthchecksArgs>;
    id: pulumi.Input<string>;
    maxRunningInstances?: pulumi.Input<number>;
    memory?: pulumi.Input<number>;
    minRunningInstances?: pulumi.Input<number>;
    ports?: pulumi.Input<pulumi.Input<inputs.GetContainerPortArgs>[]>;
    secretAliases?: pulumi.Input<pulumi.Input<inputs.GetContainerSecretAliasArgs>[]>;
    secretOverrides?: pulumi.Input<pulumi.Input<inputs.GetContainerSecretOverrideArgs>[]>;
    secrets?: pulumi.Input<pulumi.Input<inputs.GetContainerSecretArgs>[]>;
    storages?: pulumi.Input<pulumi.Input<inputs.GetContainerStorageArgs>[]>;
}