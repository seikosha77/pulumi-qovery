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

    public sealed class ApplicationStorageArgs : global::Pulumi.ResourceArgs
    {
        [Input("id")]
        public Input<string>? Id { get; set; }

        [Input("mountPoint", required: true)]
        public Input<string> MountPoint { get; set; } = null!;

        [Input("size", required: true)]
        public Input<int> Size { get; set; } = null!;

        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public ApplicationStorageArgs()
        {
        }
        public static new ApplicationStorageArgs Empty => new ApplicationStorageArgs();
    }
}
