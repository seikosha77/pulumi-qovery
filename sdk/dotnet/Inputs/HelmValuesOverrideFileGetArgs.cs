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

    public sealed class HelmValuesOverrideFileGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("gitRepository")]
        public Input<Inputs.HelmValuesOverrideFileGitRepositoryGetArgs>? GitRepository { get; set; }

        [Input("raw")]
        private InputMap<Inputs.HelmValuesOverrideFileRawGetArgs>? _raw;
        public InputMap<Inputs.HelmValuesOverrideFileRawGetArgs> Raw
        {
            get => _raw ?? (_raw = new InputMap<Inputs.HelmValuesOverrideFileRawGetArgs>());
            set => _raw = value;
        }

        public HelmValuesOverrideFileGetArgs()
        {
        }
        public static new HelmValuesOverrideFileGetArgs Empty => new HelmValuesOverrideFileGetArgs();
    }
}
