// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace ediri.Qovery.Outputs
{

    [OutputType]
    public sealed class GetApplicationHealthchecksLivenessProbeTypeResult
    {
        public readonly Outputs.GetApplicationHealthchecksLivenessProbeTypeExecResult? Exec;
        public readonly Outputs.GetApplicationHealthchecksLivenessProbeTypeGrpcResult? Grpc;
        public readonly Outputs.GetApplicationHealthchecksLivenessProbeTypeHttpResult? Http;
        public readonly Outputs.GetApplicationHealthchecksLivenessProbeTypeTcpResult? Tcp;

        [OutputConstructor]
        private GetApplicationHealthchecksLivenessProbeTypeResult(
            Outputs.GetApplicationHealthchecksLivenessProbeTypeExecResult? exec,

            Outputs.GetApplicationHealthchecksLivenessProbeTypeGrpcResult? grpc,

            Outputs.GetApplicationHealthchecksLivenessProbeTypeHttpResult? http,

            Outputs.GetApplicationHealthchecksLivenessProbeTypeTcpResult? tcp)
        {
            Exec = exec;
            Grpc = grpc;
            Http = http;
            Tcp = tcp;
        }
    }
}
