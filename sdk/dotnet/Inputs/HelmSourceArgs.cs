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

    public sealed class HelmSourceArgs : global::Pulumi.ResourceArgs
    {
        [Input("gitRepository")]
        public Input<Inputs.HelmSourceGitRepositoryArgs>? GitRepository { get; set; }

        [Input("helmRepository")]
        public Input<Inputs.HelmSourceHelmRepositoryArgs>? HelmRepository { get; set; }

        public HelmSourceArgs()
        {
        }
        public static new HelmSourceArgs Empty => new HelmSourceArgs();
    }
}
