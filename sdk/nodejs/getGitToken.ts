// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * ## # qovery.GitToken (Data Source)
 *
 * Provides a Qovery git token resource. This can be used to create and manage Qovery git token.
 */
export function getGitToken(args: GetGitTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetGitTokenResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("qovery:index/getGitToken:getGitToken", {
        "bitbucketWorkspace": args.bitbucketWorkspace,
        "description": args.description,
        "id": args.id,
    }, opts);
}

/**
 * A collection of arguments for invoking getGitToken.
 */
export interface GetGitTokenArgs {
    bitbucketWorkspace?: string;
    description?: string;
    id: string;
}

/**
 * A collection of values returned by getGitToken.
 */
export interface GetGitTokenResult {
    readonly bitbucketWorkspace: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly organizationId: string;
    readonly token: string;
    readonly type: string;
}
/**
 * ## # qovery.GitToken (Data Source)
 *
 * Provides a Qovery git token resource. This can be used to create and manage Qovery git token.
 */
export function getGitTokenOutput(args: GetGitTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGitTokenResult> {
    return pulumi.output(args).apply((a: any) => getGitToken(a, opts))
}

/**
 * A collection of arguments for invoking getGitToken.
 */
export interface GetGitTokenOutputArgs {
    bitbucketWorkspace?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id: pulumi.Input<string>;
}
