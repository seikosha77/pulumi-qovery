// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * ## # qovery.Application (Resource)
 *
 * Provides a Qovery application resource. This can be used to create and manage Qovery applications.
 *
 * ## Import
 *
 * ```sh
 *  $ pulumi import qovery:index/application:Application my_application "<application_id>"
 * ```
 */
export class Application extends pulumi.CustomResource {
    /**
     * Get an existing Application resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationState, opts?: pulumi.CustomResourceOptions): Application {
        return new Application(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'qovery:index/application:Application';

    /**
     * Returns true if the given object is an instance of Application.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Application {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Application.__pulumiType;
    }

    /**
     * Advanced settings.
     */
    public readonly advancedSettingsJson!: pulumi.Output<string>;
    /**
     * List of arguments of this application.
     */
    public readonly arguments!: pulumi.Output<string[]>;
    /**
     * Specify if the application will be automatically updated after receiving a new image tag.
     */
    public readonly autoDeploy!: pulumi.Output<boolean>;
    /**
     * Specify if the environment preview option is activated or not for this application. - Default: `false`.
     */
    public readonly autoPreview!: pulumi.Output<boolean>;
    /**
     * Build Mode of the application. - Can be: `BUILDPACKS`, `DOCKER`. - Default: `BUILDPACKS`.
     */
    public readonly buildMode!: pulumi.Output<string>;
    /**
     * Buildpack Language framework. - Required if: `build_mode="BUILDPACKS"`. - Can be: `CLOJURE`, `GO`, `GRADLE`, `GRAILS`,
     * `JAVA`, `JVM`, `NODE_JS`, `PHP`, `PLAY`, `PYTHON`, `SCALA`.
     */
    public readonly buildpackLanguage!: pulumi.Output<string | undefined>;
    /**
     * List of built-in environment variables linked to this application.
     */
    public /*out*/ readonly builtInEnvironmentVariables!: pulumi.Output<outputs.ApplicationBuiltInEnvironmentVariable[]>;
    /**
     * CPU of the application in millicores (m) [1000m = 1 CPU]. - Must be: `>= 10`. - Default: `500`.
     */
    public readonly cpu!: pulumi.Output<number>;
    /**
     * List of custom domains linked to this application.
     */
    public readonly customDomains!: pulumi.Output<outputs.ApplicationCustomDomain[] | undefined>;
    /**
     * Id of the deployment stage.
     */
    public readonly deploymentStageId!: pulumi.Output<string>;
    /**
     * Dockerfile Path of the application. - Required if: `build_mode="DOCKER"`.
     */
    public readonly dockerfilePath!: pulumi.Output<string | undefined>;
    /**
     * Entrypoint of the application.
     */
    public readonly entrypoint!: pulumi.Output<string | undefined>;
    /**
     * Id of the environment.
     */
    public readonly environmentId!: pulumi.Output<string>;
    /**
     * List of environment variable aliases linked to this application.
     */
    public readonly environmentVariableAliases!: pulumi.Output<outputs.ApplicationEnvironmentVariableAlias[] | undefined>;
    /**
     * List of environment variable overrides linked to this application.
     */
    public readonly environmentVariableOverrides!: pulumi.Output<outputs.ApplicationEnvironmentVariableOverride[] | undefined>;
    /**
     * List of environment variables linked to this application.
     */
    public readonly environmentVariables!: pulumi.Output<outputs.ApplicationEnvironmentVariable[] | undefined>;
    /**
     * The application external FQDN host [NOTE: only if your application is using a publicly accessible port].
     */
    public /*out*/ readonly externalHost!: pulumi.Output<string>;
    /**
     * Git repository of the application.
     */
    public readonly gitRepository!: pulumi.Output<outputs.ApplicationGitRepository>;
    /**
     * Configuration for the healthchecks that are going to be executed against your service
     */
    public readonly healthchecks!: pulumi.Output<outputs.ApplicationHealthchecks>;
    /**
     * The application internal host.
     */
    public /*out*/ readonly internalHost!: pulumi.Output<string>;
    /**
     * Maximum number of instances running for the application. - Must be: `>= -1`. - Default: `1`.
     */
    public readonly maxRunningInstances!: pulumi.Output<number>;
    /**
     * RAM of the application in MB [1024MB = 1GB]. - Must be: `>= 1`. - Default: `512`.
     */
    public readonly memory!: pulumi.Output<number>;
    /**
     * Minimum number of instances running for the application. - Must be: `>= 0`. - Default: `1`.
     */
    public readonly minRunningInstances!: pulumi.Output<number>;
    /**
     * Name of the application.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * List of ports linked to this application.
     */
    public readonly ports!: pulumi.Output<outputs.ApplicationPort[] | undefined>;
    /**
     * List of secret aliases linked to this application.
     */
    public readonly secretAliases!: pulumi.Output<outputs.ApplicationSecretAlias[] | undefined>;
    /**
     * List of secret overrides linked to this application.
     */
    public readonly secretOverrides!: pulumi.Output<outputs.ApplicationSecretOverride[] | undefined>;
    /**
     * List of secrets linked to this application.
     */
    public readonly secrets!: pulumi.Output<outputs.ApplicationSecret[] | undefined>;
    /**
     * List of storages linked to this application.
     */
    public readonly storages!: pulumi.Output<outputs.ApplicationStorage[] | undefined>;

    /**
     * Create a Application resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplicationArgs | ApplicationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApplicationState | undefined;
            resourceInputs["advancedSettingsJson"] = state ? state.advancedSettingsJson : undefined;
            resourceInputs["arguments"] = state ? state.arguments : undefined;
            resourceInputs["autoDeploy"] = state ? state.autoDeploy : undefined;
            resourceInputs["autoPreview"] = state ? state.autoPreview : undefined;
            resourceInputs["buildMode"] = state ? state.buildMode : undefined;
            resourceInputs["buildpackLanguage"] = state ? state.buildpackLanguage : undefined;
            resourceInputs["builtInEnvironmentVariables"] = state ? state.builtInEnvironmentVariables : undefined;
            resourceInputs["cpu"] = state ? state.cpu : undefined;
            resourceInputs["customDomains"] = state ? state.customDomains : undefined;
            resourceInputs["deploymentStageId"] = state ? state.deploymentStageId : undefined;
            resourceInputs["dockerfilePath"] = state ? state.dockerfilePath : undefined;
            resourceInputs["entrypoint"] = state ? state.entrypoint : undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["environmentVariableAliases"] = state ? state.environmentVariableAliases : undefined;
            resourceInputs["environmentVariableOverrides"] = state ? state.environmentVariableOverrides : undefined;
            resourceInputs["environmentVariables"] = state ? state.environmentVariables : undefined;
            resourceInputs["externalHost"] = state ? state.externalHost : undefined;
            resourceInputs["gitRepository"] = state ? state.gitRepository : undefined;
            resourceInputs["healthchecks"] = state ? state.healthchecks : undefined;
            resourceInputs["internalHost"] = state ? state.internalHost : undefined;
            resourceInputs["maxRunningInstances"] = state ? state.maxRunningInstances : undefined;
            resourceInputs["memory"] = state ? state.memory : undefined;
            resourceInputs["minRunningInstances"] = state ? state.minRunningInstances : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ports"] = state ? state.ports : undefined;
            resourceInputs["secretAliases"] = state ? state.secretAliases : undefined;
            resourceInputs["secretOverrides"] = state ? state.secretOverrides : undefined;
            resourceInputs["secrets"] = state ? state.secrets : undefined;
            resourceInputs["storages"] = state ? state.storages : undefined;
        } else {
            const args = argsOrState as ApplicationArgs | undefined;
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            if ((!args || args.gitRepository === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gitRepository'");
            }
            if ((!args || args.healthchecks === undefined) && !opts.urn) {
                throw new Error("Missing required property 'healthchecks'");
            }
            resourceInputs["advancedSettingsJson"] = args ? args.advancedSettingsJson : undefined;
            resourceInputs["arguments"] = args ? args.arguments : undefined;
            resourceInputs["autoDeploy"] = args ? args.autoDeploy : undefined;
            resourceInputs["autoPreview"] = args ? args.autoPreview : undefined;
            resourceInputs["buildMode"] = args ? args.buildMode : undefined;
            resourceInputs["buildpackLanguage"] = args ? args.buildpackLanguage : undefined;
            resourceInputs["cpu"] = args ? args.cpu : undefined;
            resourceInputs["customDomains"] = args ? args.customDomains : undefined;
            resourceInputs["deploymentStageId"] = args ? args.deploymentStageId : undefined;
            resourceInputs["dockerfilePath"] = args ? args.dockerfilePath : undefined;
            resourceInputs["entrypoint"] = args ? args.entrypoint : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["environmentVariableAliases"] = args ? args.environmentVariableAliases : undefined;
            resourceInputs["environmentVariableOverrides"] = args ? args.environmentVariableOverrides : undefined;
            resourceInputs["environmentVariables"] = args ? args.environmentVariables : undefined;
            resourceInputs["gitRepository"] = args ? args.gitRepository : undefined;
            resourceInputs["healthchecks"] = args ? args.healthchecks : undefined;
            resourceInputs["maxRunningInstances"] = args ? args.maxRunningInstances : undefined;
            resourceInputs["memory"] = args ? args.memory : undefined;
            resourceInputs["minRunningInstances"] = args ? args.minRunningInstances : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ports"] = args ? args.ports : undefined;
            resourceInputs["secretAliases"] = args ? args.secretAliases : undefined;
            resourceInputs["secretOverrides"] = args ? args.secretOverrides : undefined;
            resourceInputs["secrets"] = args ? args.secrets : undefined;
            resourceInputs["storages"] = args ? args.storages : undefined;
            resourceInputs["builtInEnvironmentVariables"] = undefined /*out*/;
            resourceInputs["externalHost"] = undefined /*out*/;
            resourceInputs["internalHost"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Application.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Application resources.
 */
export interface ApplicationState {
    /**
     * Advanced settings.
     */
    advancedSettingsJson?: pulumi.Input<string>;
    /**
     * List of arguments of this application.
     */
    arguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specify if the application will be automatically updated after receiving a new image tag.
     */
    autoDeploy?: pulumi.Input<boolean>;
    /**
     * Specify if the environment preview option is activated or not for this application. - Default: `false`.
     */
    autoPreview?: pulumi.Input<boolean>;
    /**
     * Build Mode of the application. - Can be: `BUILDPACKS`, `DOCKER`. - Default: `BUILDPACKS`.
     */
    buildMode?: pulumi.Input<string>;
    /**
     * Buildpack Language framework. - Required if: `build_mode="BUILDPACKS"`. - Can be: `CLOJURE`, `GO`, `GRADLE`, `GRAILS`,
     * `JAVA`, `JVM`, `NODE_JS`, `PHP`, `PLAY`, `PYTHON`, `SCALA`.
     */
    buildpackLanguage?: pulumi.Input<string>;
    /**
     * List of built-in environment variables linked to this application.
     */
    builtInEnvironmentVariables?: pulumi.Input<pulumi.Input<inputs.ApplicationBuiltInEnvironmentVariable>[]>;
    /**
     * CPU of the application in millicores (m) [1000m = 1 CPU]. - Must be: `>= 10`. - Default: `500`.
     */
    cpu?: pulumi.Input<number>;
    /**
     * List of custom domains linked to this application.
     */
    customDomains?: pulumi.Input<pulumi.Input<inputs.ApplicationCustomDomain>[]>;
    /**
     * Id of the deployment stage.
     */
    deploymentStageId?: pulumi.Input<string>;
    /**
     * Dockerfile Path of the application. - Required if: `build_mode="DOCKER"`.
     */
    dockerfilePath?: pulumi.Input<string>;
    /**
     * Entrypoint of the application.
     */
    entrypoint?: pulumi.Input<string>;
    /**
     * Id of the environment.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * List of environment variable aliases linked to this application.
     */
    environmentVariableAliases?: pulumi.Input<pulumi.Input<inputs.ApplicationEnvironmentVariableAlias>[]>;
    /**
     * List of environment variable overrides linked to this application.
     */
    environmentVariableOverrides?: pulumi.Input<pulumi.Input<inputs.ApplicationEnvironmentVariableOverride>[]>;
    /**
     * List of environment variables linked to this application.
     */
    environmentVariables?: pulumi.Input<pulumi.Input<inputs.ApplicationEnvironmentVariable>[]>;
    /**
     * The application external FQDN host [NOTE: only if your application is using a publicly accessible port].
     */
    externalHost?: pulumi.Input<string>;
    /**
     * Git repository of the application.
     */
    gitRepository?: pulumi.Input<inputs.ApplicationGitRepository>;
    /**
     * Configuration for the healthchecks that are going to be executed against your service
     */
    healthchecks?: pulumi.Input<inputs.ApplicationHealthchecks>;
    /**
     * The application internal host.
     */
    internalHost?: pulumi.Input<string>;
    /**
     * Maximum number of instances running for the application. - Must be: `>= -1`. - Default: `1`.
     */
    maxRunningInstances?: pulumi.Input<number>;
    /**
     * RAM of the application in MB [1024MB = 1GB]. - Must be: `>= 1`. - Default: `512`.
     */
    memory?: pulumi.Input<number>;
    /**
     * Minimum number of instances running for the application. - Must be: `>= 0`. - Default: `1`.
     */
    minRunningInstances?: pulumi.Input<number>;
    /**
     * Name of the application.
     */
    name?: pulumi.Input<string>;
    /**
     * List of ports linked to this application.
     */
    ports?: pulumi.Input<pulumi.Input<inputs.ApplicationPort>[]>;
    /**
     * List of secret aliases linked to this application.
     */
    secretAliases?: pulumi.Input<pulumi.Input<inputs.ApplicationSecretAlias>[]>;
    /**
     * List of secret overrides linked to this application.
     */
    secretOverrides?: pulumi.Input<pulumi.Input<inputs.ApplicationSecretOverride>[]>;
    /**
     * List of secrets linked to this application.
     */
    secrets?: pulumi.Input<pulumi.Input<inputs.ApplicationSecret>[]>;
    /**
     * List of storages linked to this application.
     */
    storages?: pulumi.Input<pulumi.Input<inputs.ApplicationStorage>[]>;
}

/**
 * The set of arguments for constructing a Application resource.
 */
export interface ApplicationArgs {
    /**
     * Advanced settings.
     */
    advancedSettingsJson?: pulumi.Input<string>;
    /**
     * List of arguments of this application.
     */
    arguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specify if the application will be automatically updated after receiving a new image tag.
     */
    autoDeploy?: pulumi.Input<boolean>;
    /**
     * Specify if the environment preview option is activated or not for this application. - Default: `false`.
     */
    autoPreview?: pulumi.Input<boolean>;
    /**
     * Build Mode of the application. - Can be: `BUILDPACKS`, `DOCKER`. - Default: `BUILDPACKS`.
     */
    buildMode?: pulumi.Input<string>;
    /**
     * Buildpack Language framework. - Required if: `build_mode="BUILDPACKS"`. - Can be: `CLOJURE`, `GO`, `GRADLE`, `GRAILS`,
     * `JAVA`, `JVM`, `NODE_JS`, `PHP`, `PLAY`, `PYTHON`, `SCALA`.
     */
    buildpackLanguage?: pulumi.Input<string>;
    /**
     * CPU of the application in millicores (m) [1000m = 1 CPU]. - Must be: `>= 10`. - Default: `500`.
     */
    cpu?: pulumi.Input<number>;
    /**
     * List of custom domains linked to this application.
     */
    customDomains?: pulumi.Input<pulumi.Input<inputs.ApplicationCustomDomain>[]>;
    /**
     * Id of the deployment stage.
     */
    deploymentStageId?: pulumi.Input<string>;
    /**
     * Dockerfile Path of the application. - Required if: `build_mode="DOCKER"`.
     */
    dockerfilePath?: pulumi.Input<string>;
    /**
     * Entrypoint of the application.
     */
    entrypoint?: pulumi.Input<string>;
    /**
     * Id of the environment.
     */
    environmentId: pulumi.Input<string>;
    /**
     * List of environment variable aliases linked to this application.
     */
    environmentVariableAliases?: pulumi.Input<pulumi.Input<inputs.ApplicationEnvironmentVariableAlias>[]>;
    /**
     * List of environment variable overrides linked to this application.
     */
    environmentVariableOverrides?: pulumi.Input<pulumi.Input<inputs.ApplicationEnvironmentVariableOverride>[]>;
    /**
     * List of environment variables linked to this application.
     */
    environmentVariables?: pulumi.Input<pulumi.Input<inputs.ApplicationEnvironmentVariable>[]>;
    /**
     * Git repository of the application.
     */
    gitRepository: pulumi.Input<inputs.ApplicationGitRepository>;
    /**
     * Configuration for the healthchecks that are going to be executed against your service
     */
    healthchecks: pulumi.Input<inputs.ApplicationHealthchecks>;
    /**
     * Maximum number of instances running for the application. - Must be: `>= -1`. - Default: `1`.
     */
    maxRunningInstances?: pulumi.Input<number>;
    /**
     * RAM of the application in MB [1024MB = 1GB]. - Must be: `>= 1`. - Default: `512`.
     */
    memory?: pulumi.Input<number>;
    /**
     * Minimum number of instances running for the application. - Must be: `>= 0`. - Default: `1`.
     */
    minRunningInstances?: pulumi.Input<number>;
    /**
     * Name of the application.
     */
    name?: pulumi.Input<string>;
    /**
     * List of ports linked to this application.
     */
    ports?: pulumi.Input<pulumi.Input<inputs.ApplicationPort>[]>;
    /**
     * List of secret aliases linked to this application.
     */
    secretAliases?: pulumi.Input<pulumi.Input<inputs.ApplicationSecretAlias>[]>;
    /**
     * List of secret overrides linked to this application.
     */
    secretOverrides?: pulumi.Input<pulumi.Input<inputs.ApplicationSecretOverride>[]>;
    /**
     * List of secrets linked to this application.
     */
    secrets?: pulumi.Input<pulumi.Input<inputs.ApplicationSecret>[]>;
    /**
     * List of storages linked to this application.
     */
    storages?: pulumi.Input<pulumi.Input<inputs.ApplicationStorage>[]>;
}
