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

    public sealed class GetJobHealthchecksReadinessProbeTypeArgs : global::Pulumi.InvokeArgs
    {
        [Input("exec")]
        public Inputs.GetJobHealthchecksReadinessProbeTypeExecArgs? Exec { get; set; }

        [Input("grpc")]
        public Inputs.GetJobHealthchecksReadinessProbeTypeGrpcArgs? Grpc { get; set; }

        [Input("http")]
        public Inputs.GetJobHealthchecksReadinessProbeTypeHttpArgs? Http { get; set; }

        [Input("tcp")]
        public Inputs.GetJobHealthchecksReadinessProbeTypeTcpArgs? Tcp { get; set; }

        public GetJobHealthchecksReadinessProbeTypeArgs()
        {
        }
        public static new GetJobHealthchecksReadinessProbeTypeArgs Empty => new GetJobHealthchecksReadinessProbeTypeArgs();
    }
}
