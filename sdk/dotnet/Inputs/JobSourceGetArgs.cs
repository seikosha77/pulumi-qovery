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

    public sealed class JobSourceGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("docker")]
        public Input<Inputs.JobSourceDockerGetArgs>? Docker { get; set; }

        [Input("image")]
        public Input<Inputs.JobSourceImageGetArgs>? Image { get; set; }

        public JobSourceGetArgs()
        {
        }
        public static new JobSourceGetArgs Empty => new JobSourceGetArgs();
    }
}
