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

    public sealed class GetApplicationHealthchecksReadinessProbeTypeInputArgs : global::Pulumi.ResourceArgs
    {
        [Input("exec")]
        public Input<Inputs.GetApplicationHealthchecksReadinessProbeTypeExecInputArgs>? Exec { get; set; }

        [Input("grpc")]
        public Input<Inputs.GetApplicationHealthchecksReadinessProbeTypeGrpcInputArgs>? Grpc { get; set; }

        [Input("http")]
        public Input<Inputs.GetApplicationHealthchecksReadinessProbeTypeHttpInputArgs>? Http { get; set; }

        [Input("tcp")]
        public Input<Inputs.GetApplicationHealthchecksReadinessProbeTypeTcpInputArgs>? Tcp { get; set; }

        public GetApplicationHealthchecksReadinessProbeTypeInputArgs()
        {
        }
        public static new GetApplicationHealthchecksReadinessProbeTypeInputArgs Empty => new GetApplicationHealthchecksReadinessProbeTypeInputArgs();
    }
}
