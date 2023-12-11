// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * ## # qovery.GitToken (Resource)
 *
 * Provides a Qovery git token resource. This can be used to create and manage Qovery git token.
 *
 * ## Example
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as qovery from "@ediri/qovery";
 *
 * const myGitToken = new qovery.GitToken("myGitToken", {
 *     organizationId: qovery_organization.my_organization.id,
 *     type: "GITHUB",
 *     token: "my-git-provider-token",
 *     description: "Github token",
 *     bitbucketWorkspace: "workspace-bitbucket",
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 *  $ pulumi import qovery:index/gitToken:GitToken my_git_token "<organization_id>,<git_token_id>"
 * ```
 */
export class GitToken extends pulumi.CustomResource {
    /**
     * Get an existing GitToken resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GitTokenState, opts?: pulumi.CustomResourceOptions): GitToken {
        return new GitToken(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'qovery:index/gitToken:GitToken';

    /**
     * Returns true if the given object is an instance of GitToken.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GitToken {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GitToken.__pulumiType;
    }

    /**
     * (Mandatory only for Bitbucket git token) Workspace where the token has permissions .
     */
    public readonly bitbucketWorkspace!: pulumi.Output<string>;
    /**
     * Description of the git token.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Name of the git token.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Id of the organization.
     */
    public readonly organizationId!: pulumi.Output<string>;
    /**
     * Value of the git token.
     */
    public readonly token!: pulumi.Output<string>;
    /**
     * Type of the git token. - Can be: `BITBUCKET`, `GITHUB`, `GITLAB`.
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a GitToken resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GitTokenArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GitTokenArgs | GitTokenState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GitTokenState | undefined;
            resourceInputs["bitbucketWorkspace"] = state ? state.bitbucketWorkspace : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["token"] = state ? state.token : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as GitTokenArgs | undefined;
            if ((!args || args.organizationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organizationId'");
            }
            if ((!args || args.token === undefined) && !opts.urn) {
                throw new Error("Missing required property 'token'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["bitbucketWorkspace"] = args ? args.bitbucketWorkspace : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["organizationId"] = args ? args.organizationId : undefined;
            resourceInputs["token"] = args?.token ? pulumi.secret(args.token) : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["token"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(GitToken.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering GitToken resources.
 */
export interface GitTokenState {
    /**
     * (Mandatory only for Bitbucket git token) Workspace where the token has permissions .
     */
    bitbucketWorkspace?: pulumi.Input<string>;
    /**
     * Description of the git token.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the git token.
     */
    name?: pulumi.Input<string>;
    /**
     * Id of the organization.
     */
    organizationId?: pulumi.Input<string>;
    /**
     * Value of the git token.
     */
    token?: pulumi.Input<string>;
    /**
     * Type of the git token. - Can be: `BITBUCKET`, `GITHUB`, `GITLAB`.
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GitToken resource.
 */
export interface GitTokenArgs {
    /**
     * (Mandatory only for Bitbucket git token) Workspace where the token has permissions .
     */
    bitbucketWorkspace?: pulumi.Input<string>;
    /**
     * Description of the git token.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the git token.
     */
    name?: pulumi.Input<string>;
    /**
     * Id of the organization.
     */
    organizationId: pulumi.Input<string>;
    /**
     * Value of the git token.
     */
    token: pulumi.Input<string>;
    /**
     * Type of the git token. - Can be: `BITBUCKET`, `GITHUB`, `GITLAB`.
     */
    type: pulumi.Input<string>;
}
