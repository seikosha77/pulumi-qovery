// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * ## # qovery.Deployment (Resource)
 *
 * Provides a Qovery deployment stage resource. This can be used to create and manage Qovery deployment stages.
 *
 * ## Example
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as qovery from "@ediri/qovery";
 *
 * const myDeployment = new qovery.Deployment("myDeployment", {
 *     environmentId: qovery_environment.my_environment.id,
 *     desiredState: "RUNNING",
 *     version: "random_uuid_to_force_retrigger_terraform_apply",
 * }, {
 *     dependsOn: [
 *         qovery_application.my_application,
 *         qovery_database.my_database,
 *         qovery_container.my_container,
 *     ],
 * });
 * ```
 */
export class Deployment extends pulumi.CustomResource {
    /**
     * Get an existing Deployment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DeploymentState, opts?: pulumi.CustomResourceOptions): Deployment {
        return new Deployment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'qovery:index/deployment:Deployment';

    /**
     * Returns true if the given object is an instance of Deployment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Deployment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Deployment.__pulumiType;
    }

    /**
     * Desired state of the deployment. - Can be: `RESTARTED`, `RUNNING`, `STOPPED`.
     */
    public readonly desiredState!: pulumi.Output<string>;
    /**
     * Id of the environment.
     */
    public readonly environmentId!: pulumi.Output<string>;
    /**
     * Version to force trigger a deployment when desired_state doesn't change (e.g redeploy a deployment having the 'RUNNING'
     * state)
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a Deployment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeploymentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DeploymentArgs | DeploymentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DeploymentState | undefined;
            resourceInputs["desiredState"] = state ? state.desiredState : undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as DeploymentArgs | undefined;
            if ((!args || args.desiredState === undefined) && !opts.urn) {
                throw new Error("Missing required property 'desiredState'");
            }
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            resourceInputs["desiredState"] = args ? args.desiredState : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Deployment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Deployment resources.
 */
export interface DeploymentState {
    /**
     * Desired state of the deployment. - Can be: `RESTARTED`, `RUNNING`, `STOPPED`.
     */
    desiredState?: pulumi.Input<string>;
    /**
     * Id of the environment.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * Version to force trigger a deployment when desired_state doesn't change (e.g redeploy a deployment having the 'RUNNING'
     * state)
     */
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Deployment resource.
 */
export interface DeploymentArgs {
    /**
     * Desired state of the deployment. - Can be: `RESTARTED`, `RUNNING`, `STOPPED`.
     */
    desiredState: pulumi.Input<string>;
    /**
     * Id of the environment.
     */
    environmentId: pulumi.Input<string>;
    /**
     * Version to force trigger a deployment when desired_state doesn't change (e.g redeploy a deployment having the 'RUNNING'
     * state)
     */
    version?: pulumi.Input<string>;
}