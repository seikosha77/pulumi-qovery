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

    public sealed class ContainerCustomDomainArgs : global::Pulumi.ResourceArgs
    {
        [Input("domain", required: true)]
        public Input<string> Domain { get; set; } = null!;

        [Input("id")]
        public Input<string>? Id { get; set; }

        [Input("status")]
        public Input<string>? Status { get; set; }

        [Input("validationDomain")]
        public Input<string>? ValidationDomain { get; set; }

        public ContainerCustomDomainArgs()
        {
        }
        public static new ContainerCustomDomainArgs Empty => new ContainerCustomDomainArgs();
    }
}
