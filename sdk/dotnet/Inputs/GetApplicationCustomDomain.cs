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

    public sealed class GetApplicationCustomDomainArgs : global::Pulumi.InvokeArgs
    {
        [Input("domain", required: true)]
        public string Domain { get; set; } = null!;

        [Input("id", required: true)]
        public string Id { get; set; } = null!;

        [Input("status", required: true)]
        public string Status { get; set; } = null!;

        [Input("validationDomain", required: true)]
        public string ValidationDomain { get; set; } = null!;

        public GetApplicationCustomDomainArgs()
        {
        }
        public static new GetApplicationCustomDomainArgs Empty => new GetApplicationCustomDomainArgs();
    }
}
