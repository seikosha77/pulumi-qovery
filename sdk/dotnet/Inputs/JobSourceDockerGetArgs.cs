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

    public sealed class JobSourceDockerGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("dockerfilePath")]
        public Input<string>? DockerfilePath { get; set; }

        [Input("gitRepository", required: true)]
        public Input<Inputs.JobSourceDockerGitRepositoryGetArgs> GitRepository { get; set; } = null!;

        public JobSourceDockerGetArgs()
        {
        }
        public static new JobSourceDockerGetArgs Empty => new JobSourceDockerGetArgs();
    }
}
