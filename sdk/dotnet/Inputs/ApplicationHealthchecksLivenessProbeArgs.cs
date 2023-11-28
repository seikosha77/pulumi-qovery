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

    public sealed class ApplicationHealthchecksLivenessProbeArgs : global::Pulumi.ResourceArgs
    {
        [Input("failureThreshold", required: true)]
        public Input<int> FailureThreshold { get; set; } = null!;

        [Input("initialDelaySeconds", required: true)]
        public Input<int> InitialDelaySeconds { get; set; } = null!;

        [Input("periodSeconds", required: true)]
        public Input<int> PeriodSeconds { get; set; } = null!;

        [Input("successThreshold", required: true)]
        public Input<int> SuccessThreshold { get; set; } = null!;

        [Input("timeoutSeconds", required: true)]
        public Input<int> TimeoutSeconds { get; set; } = null!;

        [Input("type", required: true)]
        public Input<Inputs.ApplicationHealthchecksLivenessProbeTypeArgs> Type { get; set; } = null!;

        public ApplicationHealthchecksLivenessProbeArgs()
        {
        }
        public static new ApplicationHealthchecksLivenessProbeArgs Empty => new ApplicationHealthchecksLivenessProbeArgs();
    }
}
