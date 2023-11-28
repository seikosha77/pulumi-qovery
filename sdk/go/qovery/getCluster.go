// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package qovery

import (
	"context"
	"reflect"

	"github.com/dirien/pulumi-qovery/sdk/go/qovery/internal"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// ## # Cluster (Data Source)
//
// Provides a Qovery cluster resource. This can be used to create and manage Qovery cluster.
func LookupCluster(ctx *pulumi.Context, args *LookupClusterArgs, opts ...pulumi.InvokeOption) (*LookupClusterResult, error) {
	opts = internal.PkgInvokeDefaultOpts(opts)
	var rv LookupClusterResult
	err := ctx.Invoke("qovery:index/getCluster:getCluster", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getCluster.
type LookupClusterArgs struct {
	AdvancedSettingsJson *string                  `pulumi:"advancedSettingsJson"`
	Description          *string                  `pulumi:"description"`
	Features             []GetClusterFeature      `pulumi:"features"`
	Id                   string                   `pulumi:"id"`
	KubernetesMode       *string                  `pulumi:"kubernetesMode"`
	MaxRunningNodes      *int                     `pulumi:"maxRunningNodes"`
	MinRunningNodes      *int                     `pulumi:"minRunningNodes"`
	RoutingTables        []GetClusterRoutingTable `pulumi:"routingTables"`
	State                *string                  `pulumi:"state"`
}

// A collection of values returned by getCluster.
type LookupClusterResult struct {
	AdvancedSettingsJson string                   `pulumi:"advancedSettingsJson"`
	CloudProvider        string                   `pulumi:"cloudProvider"`
	CredentialsId        string                   `pulumi:"credentialsId"`
	Description          string                   `pulumi:"description"`
	Features             []GetClusterFeature      `pulumi:"features"`
	Id                   string                   `pulumi:"id"`
	InstanceType         string                   `pulumi:"instanceType"`
	KubernetesMode       string                   `pulumi:"kubernetesMode"`
	MaxRunningNodes      int                      `pulumi:"maxRunningNodes"`
	MinRunningNodes      int                      `pulumi:"minRunningNodes"`
	Name                 string                   `pulumi:"name"`
	Region               string                   `pulumi:"region"`
	RoutingTables        []GetClusterRoutingTable `pulumi:"routingTables"`
	State                string                   `pulumi:"state"`
}

func LookupClusterOutput(ctx *pulumi.Context, args LookupClusterOutputArgs, opts ...pulumi.InvokeOption) LookupClusterResultOutput {
	return pulumi.ToOutputWithContext(context.Background(), args).
		ApplyT(func(v interface{}) (LookupClusterResult, error) {
			args := v.(LookupClusterArgs)
			r, err := LookupCluster(ctx, &args, opts...)
			var s LookupClusterResult
			if r != nil {
				s = *r
			}
			return s, err
		}).(LookupClusterResultOutput)
}

// A collection of arguments for invoking getCluster.
type LookupClusterOutputArgs struct {
	AdvancedSettingsJson pulumi.StringPtrInput            `pulumi:"advancedSettingsJson"`
	Description          pulumi.StringPtrInput            `pulumi:"description"`
	Features             GetClusterFeatureArrayInput      `pulumi:"features"`
	Id                   pulumi.StringInput               `pulumi:"id"`
	KubernetesMode       pulumi.StringPtrInput            `pulumi:"kubernetesMode"`
	MaxRunningNodes      pulumi.IntPtrInput               `pulumi:"maxRunningNodes"`
	MinRunningNodes      pulumi.IntPtrInput               `pulumi:"minRunningNodes"`
	RoutingTables        GetClusterRoutingTableArrayInput `pulumi:"routingTables"`
	State                pulumi.StringPtrInput            `pulumi:"state"`
}

func (LookupClusterOutputArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*LookupClusterArgs)(nil)).Elem()
}

// A collection of values returned by getCluster.
type LookupClusterResultOutput struct{ *pulumi.OutputState }

func (LookupClusterResultOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*LookupClusterResult)(nil)).Elem()
}

func (o LookupClusterResultOutput) ToLookupClusterResultOutput() LookupClusterResultOutput {
	return o
}

func (o LookupClusterResultOutput) ToLookupClusterResultOutputWithContext(ctx context.Context) LookupClusterResultOutput {
	return o
}

func (o LookupClusterResultOutput) AdvancedSettingsJson() pulumi.StringOutput {
	return o.ApplyT(func(v LookupClusterResult) string { return v.AdvancedSettingsJson }).(pulumi.StringOutput)
}

func (o LookupClusterResultOutput) CloudProvider() pulumi.StringOutput {
	return o.ApplyT(func(v LookupClusterResult) string { return v.CloudProvider }).(pulumi.StringOutput)
}

func (o LookupClusterResultOutput) CredentialsId() pulumi.StringOutput {
	return o.ApplyT(func(v LookupClusterResult) string { return v.CredentialsId }).(pulumi.StringOutput)
}

func (o LookupClusterResultOutput) Description() pulumi.StringOutput {
	return o.ApplyT(func(v LookupClusterResult) string { return v.Description }).(pulumi.StringOutput)
}

func (o LookupClusterResultOutput) Features() GetClusterFeatureArrayOutput {
	return o.ApplyT(func(v LookupClusterResult) []GetClusterFeature { return v.Features }).(GetClusterFeatureArrayOutput)
}

func (o LookupClusterResultOutput) Id() pulumi.StringOutput {
	return o.ApplyT(func(v LookupClusterResult) string { return v.Id }).(pulumi.StringOutput)
}

func (o LookupClusterResultOutput) InstanceType() pulumi.StringOutput {
	return o.ApplyT(func(v LookupClusterResult) string { return v.InstanceType }).(pulumi.StringOutput)
}

func (o LookupClusterResultOutput) KubernetesMode() pulumi.StringOutput {
	return o.ApplyT(func(v LookupClusterResult) string { return v.KubernetesMode }).(pulumi.StringOutput)
}

func (o LookupClusterResultOutput) MaxRunningNodes() pulumi.IntOutput {
	return o.ApplyT(func(v LookupClusterResult) int { return v.MaxRunningNodes }).(pulumi.IntOutput)
}

func (o LookupClusterResultOutput) MinRunningNodes() pulumi.IntOutput {
	return o.ApplyT(func(v LookupClusterResult) int { return v.MinRunningNodes }).(pulumi.IntOutput)
}

func (o LookupClusterResultOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v LookupClusterResult) string { return v.Name }).(pulumi.StringOutput)
}

func (o LookupClusterResultOutput) Region() pulumi.StringOutput {
	return o.ApplyT(func(v LookupClusterResult) string { return v.Region }).(pulumi.StringOutput)
}

func (o LookupClusterResultOutput) RoutingTables() GetClusterRoutingTableArrayOutput {
	return o.ApplyT(func(v LookupClusterResult) []GetClusterRoutingTable { return v.RoutingTables }).(GetClusterRoutingTableArrayOutput)
}

func (o LookupClusterResultOutput) State() pulumi.StringOutput {
	return o.ApplyT(func(v LookupClusterResult) string { return v.State }).(pulumi.StringOutput)
}

func init() {
	pulumi.RegisterOutputType(LookupClusterResultOutput{})
}