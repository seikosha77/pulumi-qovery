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

    public sealed class ContainerHealthchecksReadinessProbeTypeGrpcArgs : global::Pulumi.ResourceArgs
    {
        [Input("port", required: true)]
        public Input<int> Port { get; set; } = null!;

        [Input("service")]
        public Input<string>? Service { get; set; }

        public ContainerHealthchecksReadinessProbeTypeGrpcArgs()
        {
        }
        public static new ContainerHealthchecksReadinessProbeTypeGrpcArgs Empty => new ContainerHealthchecksReadinessProbeTypeGrpcArgs();
    }
}
