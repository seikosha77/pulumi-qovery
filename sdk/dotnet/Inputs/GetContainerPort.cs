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

    public sealed class GetContainerPortArgs : global::Pulumi.InvokeArgs
    {
        [Input("externalPort", required: true)]
        public int ExternalPort { get; set; }

        [Input("id", required: true)]
        public string Id { get; set; } = null!;

        [Input("internalPort", required: true)]
        public int InternalPort { get; set; }

        [Input("isDefault", required: true)]
        public bool IsDefault { get; set; }

        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        [Input("protocol", required: true)]
        public string Protocol { get; set; } = null!;

        [Input("publiclyAccessible", required: true)]
        public bool PubliclyAccessible { get; set; }

        public GetContainerPortArgs()
        {
        }
        public static new GetContainerPortArgs Empty => new GetContainerPortArgs();
    }
}
