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
    public sealed class GetContainerHealthchecksResult
    {
        public readonly Outputs.GetContainerHealthchecksLivenessProbeResult? LivenessProbe;
        public readonly Outputs.GetContainerHealthchecksReadinessProbeResult? ReadinessProbe;

        [OutputConstructor]
        private GetContainerHealthchecksResult(
            Outputs.GetContainerHealthchecksLivenessProbeResult? livenessProbe,

            Outputs.GetContainerHealthchecksReadinessProbeResult? readinessProbe)
        {
            LivenessProbe = livenessProbe;
            ReadinessProbe = readinessProbe;
        }
    }
}
