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
    public sealed class ApplicationHealthchecksLivenessProbe
    {
        public readonly int FailureThreshold;
        public readonly int InitialDelaySeconds;
        public readonly int PeriodSeconds;
        public readonly int SuccessThreshold;
        public readonly int TimeoutSeconds;
        public readonly Outputs.ApplicationHealthchecksLivenessProbeType Type;

        [OutputConstructor]
        private ApplicationHealthchecksLivenessProbe(
            int failureThreshold,

            int initialDelaySeconds,

            int periodSeconds,

            int successThreshold,

            int timeoutSeconds,

            Outputs.ApplicationHealthchecksLivenessProbeType type)
        {
            FailureThreshold = failureThreshold;
            InitialDelaySeconds = initialDelaySeconds;
            PeriodSeconds = periodSeconds;
            SuccessThreshold = successThreshold;
            TimeoutSeconds = timeoutSeconds;
            Type = type;
        }
    }
}
