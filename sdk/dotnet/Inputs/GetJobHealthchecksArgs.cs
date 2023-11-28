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

    public sealed class GetJobHealthchecksInputArgs : global::Pulumi.ResourceArgs
    {
        [Input("livenessProbe")]
        public Input<Inputs.GetJobHealthchecksLivenessProbeInputArgs>? LivenessProbe { get; set; }

        [Input("readinessProbe")]
        public Input<Inputs.GetJobHealthchecksReadinessProbeInputArgs>? ReadinessProbe { get; set; }

        public GetJobHealthchecksInputArgs()
        {
        }
        public static new GetJobHealthchecksInputArgs Empty => new GetJobHealthchecksInputArgs();
    }
}