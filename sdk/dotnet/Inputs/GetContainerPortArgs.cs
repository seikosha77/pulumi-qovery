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

    public sealed class GetContainerPortInputArgs : global::Pulumi.ResourceArgs
    {
        [Input("externalPort", required: true)]
        public Input<int> ExternalPort { get; set; } = null!;

        [Input("id", required: true)]
        public Input<string> Id { get; set; } = null!;

        [Input("internalPort", required: true)]
        public Input<int> InternalPort { get; set; } = null!;

        [Input("isDefault", required: true)]
        public Input<bool> IsDefault { get; set; } = null!;

        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        [Input("protocol", required: true)]
        public Input<string> Protocol { get; set; } = null!;

        [Input("publiclyAccessible", required: true)]
        public Input<bool> PubliclyAccessible { get; set; } = null!;

        public GetContainerPortInputArgs()
        {
        }
        public static new GetContainerPortInputArgs Empty => new GetContainerPortInputArgs();
    }
}