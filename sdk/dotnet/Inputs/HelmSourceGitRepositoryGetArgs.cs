// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace ediri.Qovery.Inputs
{

    public sealed class HelmSourceGitRepositoryGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("branch")]
        public Input<string>? Branch { get; set; }

        [Input("gitTokenId")]
        public Input<string>? GitTokenId { get; set; }

        [Input("rootPath")]
        public Input<string>? RootPath { get; set; }

        [Input("url", required: true)]
        public Input<string> Url { get; set; } = null!;

        public HelmSourceGitRepositoryGetArgs()
        {
        }
        public static new HelmSourceGitRepositoryGetArgs Empty => new HelmSourceGitRepositoryGetArgs();
    }
}
