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

    public sealed class ClusterRoutingTableGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("description", required: true)]
        public Input<string> Description { get; set; } = null!;

        [Input("destination", required: true)]
        public Input<string> Destination { get; set; } = null!;

        [Input("target", required: true)]
        public Input<string> Target { get; set; } = null!;

        public ClusterRoutingTableGetArgs()
        {
        }
        public static new ClusterRoutingTableGetArgs Empty => new ClusterRoutingTableGetArgs();
    }
}
