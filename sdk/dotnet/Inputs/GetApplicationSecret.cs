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

    public sealed class GetApplicationSecretArgs : global::Pulumi.InvokeArgs
    {
        [Input("id", required: true)]
        public string Id { get; set; } = null!;

        [Input("key", required: true)]
        public string Key { get; set; } = null!;

        [Input("value", required: true)]
        private string? _value;
        public string? Value
        {
            get => _value;
            set => _value = value;
        }

        public GetApplicationSecretArgs()
        {
        }
        public static new GetApplicationSecretArgs Empty => new GetApplicationSecretArgs();
    }
}
