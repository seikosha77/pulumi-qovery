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

    public sealed class HelmValuesOverrideGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("file")]
        public Input<Inputs.HelmValuesOverrideFileGetArgs>? File { get; set; }

        [Input("set", required: true)]
        private InputMap<string>? _set;
        public InputMap<string> Set
        {
            get => _set ?? (_set = new InputMap<string>());
            set => _set = value;
        }

        [Input("setJson", required: true)]
        private InputMap<string>? _setJson;
        public InputMap<string> SetJson
        {
            get => _setJson ?? (_setJson = new InputMap<string>());
            set => _setJson = value;
        }

        [Input("setString", required: true)]
        private InputMap<string>? _setString;
        public InputMap<string> SetString
        {
            get => _setString ?? (_setString = new InputMap<string>());
            set => _setString = value;
        }

        public HelmValuesOverrideGetArgs()
        {
        }
        public static new HelmValuesOverrideGetArgs Empty => new HelmValuesOverrideGetArgs();
    }
}
