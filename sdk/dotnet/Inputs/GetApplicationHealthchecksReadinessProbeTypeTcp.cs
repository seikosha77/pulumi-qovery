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

    public sealed class GetApplicationHealthchecksReadinessProbeTypeTcpArgs : global::Pulumi.InvokeArgs
    {
        [Input("host", required: true)]
        public string Host { get; set; } = null!;

        [Input("port", required: true)]
        public int Port { get; set; }

        public GetApplicationHealthchecksReadinessProbeTypeTcpArgs()
        {
        }
        public static new GetApplicationHealthchecksReadinessProbeTypeTcpArgs Empty => new GetApplicationHealthchecksReadinessProbeTypeTcpArgs();
    }
}
