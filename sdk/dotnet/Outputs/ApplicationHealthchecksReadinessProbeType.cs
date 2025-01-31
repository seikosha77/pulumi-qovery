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
    public sealed class ApplicationHealthchecksReadinessProbeType
    {
        public readonly Outputs.ApplicationHealthchecksReadinessProbeTypeExec? Exec;
        public readonly Outputs.ApplicationHealthchecksReadinessProbeTypeGrpc? Grpc;
        public readonly Outputs.ApplicationHealthchecksReadinessProbeTypeHttp? Http;
        public readonly Outputs.ApplicationHealthchecksReadinessProbeTypeTcp? Tcp;

        [OutputConstructor]
        private ApplicationHealthchecksReadinessProbeType(
            Outputs.ApplicationHealthchecksReadinessProbeTypeExec? exec,

            Outputs.ApplicationHealthchecksReadinessProbeTypeGrpc? grpc,

            Outputs.ApplicationHealthchecksReadinessProbeTypeHttp? http,

            Outputs.ApplicationHealthchecksReadinessProbeTypeTcp? tcp)
        {
            Exec = exec;
            Grpc = grpc;
            Http = http;
            Tcp = tcp;
        }
    }
}
