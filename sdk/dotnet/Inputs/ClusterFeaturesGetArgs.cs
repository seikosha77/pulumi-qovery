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

    public sealed class ClusterFeaturesGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("staticIp")]
        public Input<bool>? StaticIp { get; set; }

        [Input("vpcSubnet")]
        public Input<string>? VpcSubnet { get; set; }

        public ClusterFeaturesGetArgs()
        {
        }
        public static new ClusterFeaturesGetArgs Empty => new ClusterFeaturesGetArgs();
    }
}
