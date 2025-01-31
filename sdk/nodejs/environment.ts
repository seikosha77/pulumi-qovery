// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * ## # qovery.Environment (Resource)
 *
 * Provides a Qovery environment resource. This can be used to create and manage Qovery environments.
 *
 * ## Example
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as qovery from "@ediri/qovery";
 *
 * const myEnvironment = new qovery.Environment("myEnvironment", {
 *     projectId: qovery_project.my_project.id,
 *     clusterId: qovery_cluster.my_cluster.id,
 *     mode: "DEVELOPMENT",
 *     environmentVariables: [{
 *         key: "ENV_VAR_KEY",
 *         value: "ENV_VAR_VALUE",
 *     }],
 *     environmentVariableAliases: [{
 *         key: "ENV_VAR_KEY_ALIAS",
 *         value: "ENV_VAR_KEY",
 *     }],
 *     environmentVariableOverrides: [{
 *         key: "SOME_PROJECT_VARIABLE",
 *         value: "OVERRIDDEN_VALUE",
 *     }],
 *     secrets: [{
 *         key: "SECRET_KEY",
 *         value: "SECRET_VALUE",
 *     }],
 *     secretAliases: [{
 *         key: "SECRET_KEY_ALIAS",
 *         value: "SECRET_KEY",
 *     }],
 *     secretOverrides: [{
 *         key: "SOME_PROJECT_SECRET",
 *         value: "OVERRIDDEN_VALUE",
 *     }],
 * }, {
 *     dependsOn: [qovery_project.my_project],
 * });
 * ```
 *
 * You can find complete examples within these repositories:
 *
 * * Deploy an Application and Database within 3 environments
 *
 * ## Import
 *
 * ```sh
 *  $ pulumi import qovery:index/environment:Environment my_environment "<environment_id>"
 * ```
 */
export class Environment extends pulumi.CustomResource {
    /**
     * Get an existing Environment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EnvironmentState, opts?: pulumi.CustomResourceOptions): Environment {
        return new Environment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'qovery:index/environment:Environment';

    /**
     * Returns true if the given object is an instance of Environment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Environment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Environment.__pulumiType;
    }

    /**
     * List of built-in environment variables linked to this environment.
     */
    public /*out*/ readonly builtInEnvironmentVariables!: pulumi.Output<outputs.EnvironmentBuiltInEnvironmentVariable[]>;
    /**
     * Id of the cluster [NOTE: can't be updated after creation].
     */
    public readonly clusterId!: pulumi.Output<string>;
    /**
     * List of environment variable aliases linked to this environment.
     */
    public readonly environmentVariableAliases!: pulumi.Output<outputs.EnvironmentEnvironmentVariableAlias[] | undefined>;
    /**
     * List of environment variable overrides linked to this environment.
     */
    public readonly environmentVariableOverrides!: pulumi.Output<outputs.EnvironmentEnvironmentVariableOverride[] | undefined>;
    /**
     * List of environment variables linked to this environment.
     */
    public readonly environmentVariables!: pulumi.Output<outputs.EnvironmentEnvironmentVariable[] | undefined>;
    /**
     * Mode of the environment [NOTE: can't be updated after creation]. - Can be: `DEVELOPMENT`, `PREVIEW`, `PRODUCTION`,
     * `STAGING`. - Default: `DEVELOPMENT`.
     */
    public readonly mode!: pulumi.Output<string>;
    /**
     * Name of the environment.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Id of the project.
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * List of secret aliases linked to this environment.
     */
    public readonly secretAliases!: pulumi.Output<outputs.EnvironmentSecretAlias[] | undefined>;
    /**
     * List of secret overrides linked to this environment.
     */
    public readonly secretOverrides!: pulumi.Output<outputs.EnvironmentSecretOverride[] | undefined>;
    /**
     * List of secrets linked to this environment.
     */
    public readonly secrets!: pulumi.Output<outputs.EnvironmentSecret[] | undefined>;

    /**
     * Create a Environment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnvironmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EnvironmentArgs | EnvironmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EnvironmentState | undefined;
            resourceInputs["builtInEnvironmentVariables"] = state ? state.builtInEnvironmentVariables : undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["environmentVariableAliases"] = state ? state.environmentVariableAliases : undefined;
            resourceInputs["environmentVariableOverrides"] = state ? state.environmentVariableOverrides : undefined;
            resourceInputs["environmentVariables"] = state ? state.environmentVariables : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["secretAliases"] = state ? state.secretAliases : undefined;
            resourceInputs["secretOverrides"] = state ? state.secretOverrides : undefined;
            resourceInputs["secrets"] = state ? state.secrets : undefined;
        } else {
            const args = argsOrState as EnvironmentArgs | undefined;
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["environmentVariableAliases"] = args ? args.environmentVariableAliases : undefined;
            resourceInputs["environmentVariableOverrides"] = args ? args.environmentVariableOverrides : undefined;
            resourceInputs["environmentVariables"] = args ? args.environmentVariables : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["secretAliases"] = args ? args.secretAliases : undefined;
            resourceInputs["secretOverrides"] = args ? args.secretOverrides : undefined;
            resourceInputs["secrets"] = args ? args.secrets : undefined;
            resourceInputs["builtInEnvironmentVariables"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Environment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Environment resources.
 */
export interface EnvironmentState {
    /**
     * List of built-in environment variables linked to this environment.
     */
    builtInEnvironmentVariables?: pulumi.Input<pulumi.Input<inputs.EnvironmentBuiltInEnvironmentVariable>[]>;
    /**
     * Id of the cluster [NOTE: can't be updated after creation].
     */
    clusterId?: pulumi.Input<string>;
    /**
     * List of environment variable aliases linked to this environment.
     */
    environmentVariableAliases?: pulumi.Input<pulumi.Input<inputs.EnvironmentEnvironmentVariableAlias>[]>;
    /**
     * List of environment variable overrides linked to this environment.
     */
    environmentVariableOverrides?: pulumi.Input<pulumi.Input<inputs.EnvironmentEnvironmentVariableOverride>[]>;
    /**
     * List of environment variables linked to this environment.
     */
    environmentVariables?: pulumi.Input<pulumi.Input<inputs.EnvironmentEnvironmentVariable>[]>;
    /**
     * Mode of the environment [NOTE: can't be updated after creation]. - Can be: `DEVELOPMENT`, `PREVIEW`, `PRODUCTION`,
     * `STAGING`. - Default: `DEVELOPMENT`.
     */
    mode?: pulumi.Input<string>;
    /**
     * Name of the environment.
     */
    name?: pulumi.Input<string>;
    /**
     * Id of the project.
     */
    projectId?: pulumi.Input<string>;
    /**
     * List of secret aliases linked to this environment.
     */
    secretAliases?: pulumi.Input<pulumi.Input<inputs.EnvironmentSecretAlias>[]>;
    /**
     * List of secret overrides linked to this environment.
     */
    secretOverrides?: pulumi.Input<pulumi.Input<inputs.EnvironmentSecretOverride>[]>;
    /**
     * List of secrets linked to this environment.
     */
    secrets?: pulumi.Input<pulumi.Input<inputs.EnvironmentSecret>[]>;
}

/**
 * The set of arguments for constructing a Environment resource.
 */
export interface EnvironmentArgs {
    /**
     * Id of the cluster [NOTE: can't be updated after creation].
     */
    clusterId: pulumi.Input<string>;
    /**
     * List of environment variable aliases linked to this environment.
     */
    environmentVariableAliases?: pulumi.Input<pulumi.Input<inputs.EnvironmentEnvironmentVariableAlias>[]>;
    /**
     * List of environment variable overrides linked to this environment.
     */
    environmentVariableOverrides?: pulumi.Input<pulumi.Input<inputs.EnvironmentEnvironmentVariableOverride>[]>;
    /**
     * List of environment variables linked to this environment.
     */
    environmentVariables?: pulumi.Input<pulumi.Input<inputs.EnvironmentEnvironmentVariable>[]>;
    /**
     * Mode of the environment [NOTE: can't be updated after creation]. - Can be: `DEVELOPMENT`, `PREVIEW`, `PRODUCTION`,
     * `STAGING`. - Default: `DEVELOPMENT`.
     */
    mode?: pulumi.Input<string>;
    /**
     * Name of the environment.
     */
    name?: pulumi.Input<string>;
    /**
     * Id of the project.
     */
    projectId: pulumi.Input<string>;
    /**
     * List of secret aliases linked to this environment.
     */
    secretAliases?: pulumi.Input<pulumi.Input<inputs.EnvironmentSecretAlias>[]>;
    /**
     * List of secret overrides linked to this environment.
     */
    secretOverrides?: pulumi.Input<pulumi.Input<inputs.EnvironmentSecretOverride>[]>;
    /**
     * List of secrets linked to this environment.
     */
    secrets?: pulumi.Input<pulumi.Input<inputs.EnvironmentSecret>[]>;
}
