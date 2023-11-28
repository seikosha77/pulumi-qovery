// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * ## # qovery.Application (Data Source)
 *
 * Provides a Qovery application resource. This can be used to create and manage Qovery applications.
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as qovery from "@pulumi/qovery";
 *
 * const myApplication = qovery.getApplication({
 *     id: "<application_id>",
 * });
 * ```
 */
export function getApplication(args: GetApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("qovery:index/getApplication:getApplication", {
        "advancedSettingsJson": args.advancedSettingsJson,
        "arguments": args.arguments,
        "autoDeploy": args.autoDeploy,
        "autoPreview": args.autoPreview,
        "buildpackLanguage": args.buildpackLanguage,
        "cpu": args.cpu,
        "customDomains": args.customDomains,
        "deploymentStageId": args.deploymentStageId,
        "dockerfilePath": args.dockerfilePath,
        "entrypoint": args.entrypoint,
        "environmentVariableAliases": args.environmentVariableAliases,
        "environmentVariableOverrides": args.environmentVariableOverrides,
        "environmentVariables": args.environmentVariables,
        "healthchecks": args.healthchecks,
        "id": args.id,
        "maxRunningInstances": args.maxRunningInstances,
        "memory": args.memory,
        "minRunningInstances": args.minRunningInstances,
        "secretAliases": args.secretAliases,
        "secretOverrides": args.secretOverrides,
        "secrets": args.secrets,
        "storages": args.storages,
    }, opts);
}

/**
 * A collection of arguments for invoking getApplication.
 */
export interface GetApplicationArgs {
    advancedSettingsJson?: string;
    arguments?: string[];
    autoDeploy?: boolean;
    autoPreview?: boolean;
    buildpackLanguage?: string;
    cpu?: number;
    customDomains?: inputs.GetApplicationCustomDomain[];
    deploymentStageId?: string;
    dockerfilePath?: string;
    entrypoint?: string;
    environmentVariableAliases?: inputs.GetApplicationEnvironmentVariableAlias[];
    environmentVariableOverrides?: inputs.GetApplicationEnvironmentVariableOverride[];
    environmentVariables?: inputs.GetApplicationEnvironmentVariable[];
    healthchecks?: inputs.GetApplicationHealthchecks;
    id: string;
    maxRunningInstances?: number;
    memory?: number;
    minRunningInstances?: number;
    secretAliases?: inputs.GetApplicationSecretAlias[];
    secretOverrides?: inputs.GetApplicationSecretOverride[];
    secrets?: inputs.GetApplicationSecret[];
    storages?: inputs.GetApplicationStorage[];
}

/**
 * A collection of values returned by getApplication.
 */
export interface GetApplicationResult {
    readonly advancedSettingsJson: string;
    readonly arguments: string[];
    readonly autoDeploy: boolean;
    readonly autoPreview: boolean;
    readonly buildMode: string;
    readonly buildpackLanguage: string;
    readonly builtInEnvironmentVariables: outputs.GetApplicationBuiltInEnvironmentVariable[];
    readonly cpu: number;
    readonly customDomains?: outputs.GetApplicationCustomDomain[];
    readonly deploymentStageId: string;
    readonly dockerfilePath: string;
    readonly entrypoint: string;
    readonly environmentId: string;
    readonly environmentVariableAliases?: outputs.GetApplicationEnvironmentVariableAlias[];
    readonly environmentVariableOverrides?: outputs.GetApplicationEnvironmentVariableOverride[];
    readonly environmentVariables?: outputs.GetApplicationEnvironmentVariable[];
    readonly externalHost: string;
    readonly gitRepository: outputs.GetApplicationGitRepository;
    readonly healthchecks?: outputs.GetApplicationHealthchecks;
    readonly id: string;
    readonly internalHost: string;
    readonly maxRunningInstances: number;
    readonly memory: number;
    readonly minRunningInstances: number;
    readonly name: string;
    readonly ports: outputs.GetApplicationPort[];
    readonly secretAliases?: outputs.GetApplicationSecretAlias[];
    readonly secretOverrides?: outputs.GetApplicationSecretOverride[];
    readonly secrets?: outputs.GetApplicationSecret[];
    readonly storages: outputs.GetApplicationStorage[];
}
/**
 * ## # qovery.Application (Data Source)
 *
 * Provides a Qovery application resource. This can be used to create and manage Qovery applications.
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as qovery from "@pulumi/qovery";
 *
 * const myApplication = qovery.getApplication({
 *     id: "<application_id>",
 * });
 * ```
 */
export function getApplicationOutput(args: GetApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationResult> {
    return pulumi.output(args).apply((a: any) => getApplication(a, opts))
}

/**
 * A collection of arguments for invoking getApplication.
 */
export interface GetApplicationOutputArgs {
    advancedSettingsJson?: pulumi.Input<string>;
    arguments?: pulumi.Input<pulumi.Input<string>[]>;
    autoDeploy?: pulumi.Input<boolean>;
    autoPreview?: pulumi.Input<boolean>;
    buildpackLanguage?: pulumi.Input<string>;
    cpu?: pulumi.Input<number>;
    customDomains?: pulumi.Input<pulumi.Input<inputs.GetApplicationCustomDomainArgs>[]>;
    deploymentStageId?: pulumi.Input<string>;
    dockerfilePath?: pulumi.Input<string>;
    entrypoint?: pulumi.Input<string>;
    environmentVariableAliases?: pulumi.Input<pulumi.Input<inputs.GetApplicationEnvironmentVariableAliasArgs>[]>;
    environmentVariableOverrides?: pulumi.Input<pulumi.Input<inputs.GetApplicationEnvironmentVariableOverrideArgs>[]>;
    environmentVariables?: pulumi.Input<pulumi.Input<inputs.GetApplicationEnvironmentVariableArgs>[]>;
    healthchecks?: pulumi.Input<inputs.GetApplicationHealthchecksArgs>;
    id: pulumi.Input<string>;
    maxRunningInstances?: pulumi.Input<number>;
    memory?: pulumi.Input<number>;
    minRunningInstances?: pulumi.Input<number>;
    secretAliases?: pulumi.Input<pulumi.Input<inputs.GetApplicationSecretAliasArgs>[]>;
    secretOverrides?: pulumi.Input<pulumi.Input<inputs.GetApplicationSecretOverrideArgs>[]>;
    secrets?: pulumi.Input<pulumi.Input<inputs.GetApplicationSecretArgs>[]>;
    storages?: pulumi.Input<pulumi.Input<inputs.GetApplicationStorageArgs>[]>;
}