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
    public sealed class GetJobSourceResult
    {
        public readonly Outputs.GetJobSourceDockerResult Docker;
        public readonly Outputs.GetJobSourceImageResult Image;

        [OutputConstructor]
        private GetJobSourceResult(
            Outputs.GetJobSourceDockerResult docker,

            Outputs.GetJobSourceImageResult image)
        {
            Docker = docker;
            Image = image;
        }
    }
}
