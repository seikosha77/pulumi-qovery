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

    public sealed class JobHealthchecksLivenessProbeTypeHttpGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("path")]
        public Input<string>? Path { get; set; }

        [Input("port", required: true)]
        public Input<int> Port { get; set; } = null!;

        [Input("scheme")]
        public Input<string>? Scheme { get; set; }

        public JobHealthchecksLivenessProbeTypeHttpGetArgs()
        {
        }
        public static new JobHealthchecksLivenessProbeTypeHttpGetArgs Empty => new JobHealthchecksLivenessProbeTypeHttpGetArgs();
    }
}
